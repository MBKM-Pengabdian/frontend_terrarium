/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaCartPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  Toast,
  formatRupiah,
  nameTitleUrl,
} from "../../../../../../utils/GlobalFunction";
import CartService from "../../../../../../services/cart.service";
import ProductService from "../../../../../../services/product.service";
import { Link, useNavigate } from "react-router-dom";

export const CardProduct = () => {
  const navigate = useNavigate();
  const cartservice = CartService();
  const productservice = ProductService();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productservice.handleGetAllProduct();
        if (response.status === 200) {
          setProductData(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleAddCart = async (idproduct) => {
    const data = {
      customer_id: localStorage.getItem("customer_id"),
      product_id: idproduct,
      quantity: 1,
    };
    try {
      const response = await cartservice.handleNewShoppingCart(data);

      if (response.status === 200) {
        Toast.fire({
          icon: "success",
          title: `Berhasil Masuk Keranjang`,
        });
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="row g-4 justify-content-between">
      {productData &&
        productData.map((product, index) => (
          <div
            className="col-6 col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-0"
            key={index}
          >
            <div className="card rounded shadow-sm border-0">
              <div className="card-body p-0" style={{ height: "28rem" }}>
                <img
                  onClick={() =>
                    navigate(
                      `/product/${nameTitleUrl(product.product_name)}/${
                        product.uuid
                      }`
                    )
                  }
                  src={import.meta.env.VITE_API_URL + product.product_image}
                  style={{
                    objectFit: "cover",
                    height: "250px",
                    width: "100%",
                  }}
                  alt={product.product_name}
                  className="img-fluid d-block mb-3"
                />
                <div className="px-4">
                  <h5>
                    <Link
                      to={`/product/${nameTitleUrl(product.product_name)}/${
                        product.uuid
                      }`}
                      className="text-dark text-2line"
                    >
                      {product.product_name}
                    </Link>
                  </h5>
                  <div className="small fs-6 text-danger fw-bold">
                    {formatRupiah(product.price)}
                  </div>
                  <div className="d-flex">
                    <ul className="list-inline small w-50">
                      {[...Array(5)].map((_, i) => (
                        <li className="list-inline-item m-0" key={i}>
                          {i < 2 ? (
                            <FaStar className="text-success" />
                          ) : (
                            <FaStar className="text-muted" />
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="w-50 text-end">
                      <button
                        className="btn bg-primary text-light"
                        onClick={() => handleAddCart(product.uuid)}
                      >
                        <FaCartPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // <div key={index} className="card p-0" style={{ width: "18rem" }}>
          //   <img
          //     style={{
          //       objectFit: "cover",
          //       height: "55%",
          //     }}
          //     src={import.meta.env.VITE_API_URL + product.product_image}
          //     className="card-img-top"
          //     alt="..."
          //   />
          //   <div className="card-body">
          //     <h5 className="card-title text-2line">{product.product_name}</h5>
          //     <p className="card-text fw-bold mt-"> {formatRupiah(product.price)}</p>
          //     <button
          //       href="#"
          //       className="btn bg-primary text-light"
          //       onClick={() => handleAddCart(product.uuid)}
          //     >
          //       <FaCartPlus />
          //     </button>
          //   </div>
          // </div>
        ))}
    </div>
  );
};
