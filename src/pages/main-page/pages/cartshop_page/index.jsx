import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { Toast, formatRupiah } from "../../../../utils/GlobalFunction";
import CartService from "../../../../services/cart.service";

export const CartShopPage = () => {
  const cartService = CartService();
  const [cartList, setCartList] = useState();
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (data, index) => {
    setSelectedItems((prevSelectedItems) => {
      const isSelected = !!prevSelectedItems[index];
      // Jika checkbox di-uncheck dan data sudah ada dalam selectedItems, maka hapus data tersebut
      if (isSelected) {
        const updatedSelectedItems = { ...prevSelectedItems };
        delete updatedSelectedItems[index];
        return updatedSelectedItems;
      } else {
        // Jika checkbox di-check, tambahkan data ke selectedItems
        return { ...prevSelectedItems, [index]: data };
      }
    });
    // calculateTotalPrice()
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    for (const index in selectedItems) {
      totalPrice +=
        selectedItems[index].product.price * selectedItems[index].quantity;
    }
    return totalPrice;
  };

  const handleDeleteCart = async (id) => {
    try {
      const response = await cartService.handleDeleteShoppingCart(id);
      if (response.status === 200) {
        handleGetCart();
        Toast.fire({
        icon: "success",
        title: `Produk Dihapus`,
      });
      }
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  const handleGetCart = async () => {
    try {
      const response = await cartService.handleGetShoppingCart();
      if (response.status === 200) {
        setCartList(response.data);
        return;
      }
      Toast.fire({
        icon: "error",
        title: `Ada Kesalahan`,
      });
    } catch (error) {
      if (error.status === 404) {
        Toast.fire({
          icon: "error",
          title: `Ada Kesalahan`,
        });
      }
    }
  };

  useEffect(() => {
    handleGetCart();
  }, []);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            {cartList &&
              cartList.map((data, index) => (
                <div key={index} className="bg-light mb-3">
                  <div className="row g-0">
                    <div className="col-auto text-end p-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={!!selectedItems[index]} // Tentukan apakah checkbox harus dicentang atau tidak berdasarkan state
                        onChange={() => handleCheckboxChange(data, index)} // Panggil fungsi handleCheckboxChange saat checkbox diubah
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        src={
                          import.meta.env.VITE_API_URL +
                          data.product.product_image
                        }
                        className="img-fluid p-3"
                        alt={data.product.product_name}
                        style={{
                          height: "150px",
                          width: "200px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="col-md-7 p-3">
                      <div className="card-body pt-lg-0">
                        <h5 className="card-title mb-2">
                          {data.product.product_name}
                        </h5>
                        <p className="card-text">
                          <button className="btn btn-sm px-3 border border-2">
                            <FaPlus />
                          </button>
                          <span className="mx-3">{data.quantity} </span>
                          <button className="btn btn-sm px-3 border border-2">
                            <FaMinus />
                          </button>
                          <FaTrash
                            className="ms-4 fs-5 text-danger"
                            onClick={() => handleDeleteCart(data.uuid)}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-auto p-3">
                      <div className="h5 fw-bold text-danger">
                        {formatRupiah(data.product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-lg-4 pb-4 fixed-sm-bottom">
            <div className="sticky-top bg-light py-3 px-4">
              <div className="fs-6 text-dark fw-bold mb-3">Ringkasan</div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="fs-6 text-dark fw-bold mb-5">Total</div>
                </div>
                <div className="col-lg-6 text-end">
                  <div className="text-dark fw-bold mb-5 h5">
                    Rp {calculateTotalPrice().toLocaleString()}
                  </div>
                </div>
              </div>
              <button className="btn bg-primary text-light fw-bold w-100 fs-6">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
