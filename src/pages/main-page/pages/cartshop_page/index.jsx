import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import {
  Toast,
  formatRupiah,
  nameTitleUrl,
} from "../../../../utils/GlobalFunction";
import CartService from "../../../../services/cart.service";
import imgEmptyCart from "./../../../../assets/img/empty-cart.svg";
import { Link, useNavigate } from "react-router-dom";

export const CartShopPage = () => {
  const [loading, setLoading] = useState(false);
  const cartService = CartService();
  const navigate = useNavigate();
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
      console.log(error);
    }
  };

  const handleGetCart = async () => {
    try {
      const response = await cartService.handleGetShoppingCart();
      if (response.status === 200) {
        setCartList(response.data);
        setLoading(true);
        return;
      }
      Toast.fire({
        icon: "error",
        title: `Ada Kesalahan`,
      });
    } catch (error) {
      console.log(error);
      if (error.request.status === 401) {
        navigate("/user-login");
      }
    }
  };

  useEffect(() => {
    handleGetCart();
  }, []);
  return (
    <>
      {loading && (
        <div className="container-fluid">
          <div className="row g-3">
            <aside className="col-lg-9 pt-3">
              <div className="card bg-white">
                <div className="card-body">
                  <div className="row d-none">
                    <div className="col-lg-7">produk</div>
                    <div className="col-lg-2 col-md-6 col-sm-6">Harga</div>
                    <div className="col-lg-2 col-md-6 col-sm-6">Jumlah</div>
                  </div>
                  {cartList && cartList.length > 0 ? (
                    cartList.map((data, index) => (
                      <div className="row my-4" key={index}>
                        <div className="col-5 col-lg-2 col-md-3 col-sm-3">
                          <div className="row">
                            <div className="col-auto px-0">
                              <input
                                type="checkbox"
                                className="form-check-input border border-2"
                                checked={!!selectedItems[index]}
                                onChange={() =>
                                  handleCheckboxChange(data, index)
                                }
                              />
                            </div>
                            <div className="col">
                              <img
                                src={
                                  import.meta.env.VITE_API_URL +
                                  data.product.product_image
                                }
                                className="img-fluid me-3"
                                style={{
                                  height: "150px",
                                  width: "150px",
                                  objectFit: "cover",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  navigate(
                                    `/product/${nameTitleUrl(
                                      data.product.product_name
                                    )}/${data.product.uuid}`
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-7 col-lg-10 col-md-6 col-sm-6">
                          <div className="row g-3">
                            <div className="col-lg-4">
                              <Link
                                to={`/product/${nameTitleUrl(
                                  data.product.product_name
                                )}/${data.product.uuid}`}
                                className="nameproduk-cart text-2line"
                              >
                                {data.product.product_name}
                              </Link>
                            </div>
                            <div className="col-12 col-lg-2 col-md-12 col-sm-12">
                              {formatRupiah(data.product.price)}
                            </div>
                            <div className="col-10 col-lg-4 col-md-5 col-sm-5 text-center">
                              <div className="btn-group">
                                <button className="btn p-2 btn-outline-dark">
                                  <FaMinus />
                                </button>
                                <button className="btn py-2 btn-outline-dark">
                                  {data.quantity}
                                </button>
                                <button className="btn p-2 btn-outline-dark">
                                  <FaPlus />
                                </button>
                              </div>
                            </div>
                            <div className="col-2 col-lg-auto col-md-2 col-sm-2 text-end">
                              <FaTrash
                                className="text-danger"
                                onClick={() => handleDeleteCart(data.uuid)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center">
                      <img
                        src={imgEmptyCart}
                        className="img-fluid"
                        style={{ width: "200px" }}
                        alt="empty cart"
                      />
                      <div className="h4 my-3">Keranjang anda masih kosong</div>
                      <div className="mt-5">
                        <Link
                          to="/product"
                          href="#"
                          className="btn btn-success btn-square mt-2 w-25"
                        >
                          Cari Barang
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </aside>
            <aside className="col-lg-3">
              <div className="sticky-top pt-4">
                <div className="card bg-white mb-3">
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Have coupon?</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control coupon"
                            name=""
                            placeholder="Coupon code"
                          />
                          <span className="input-group-append">
                            <button className="btn btn-success btn-apply coupon">
                              Apply
                            </button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card bg-white">
                  <div className="card-body">
                    <dl className="dlist-align">
                      <dt>Total price:</dt>
                      <dd className="text-right ml-3">
                        {formatRupiah(calculateTotalPrice())}
                      </dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Discount:</dt>
                      <dd className="text-right text-danger ml-3">
                        - {formatRupiah(0)}
                      </dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Total:</dt>
                      <dd className="text-right text-dark b ml-3">
                        <strong>{formatRupiah(calculateTotalPrice())}</strong>
                      </dd>
                    </dl>
                    <hr />
                    <a
                      href="#"
                      className="btn btn-out btn-success btn-square btn-main mt-2"
                      data-abc="true"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  );
};
