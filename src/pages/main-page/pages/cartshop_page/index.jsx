import { FaMinus, FaPlus } from "react-icons/fa";
import sampel from "./../../../../assets/img/forest.jpg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { formatRupiah } from "../../../../utils/GlobalFunction";

export const CartShopPage = () => {
  const [cartList, setCartList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/cart/get/${localStorage.getItem(
            "customer_id"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "accessToken_customer"
              )}`,
            },
          }
        );

        setCartList(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };
    fetchData();
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
                      <input type="checkbox" className="form-check-input" />
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
                          <span className="mx-3">
                            {" "}
                            {data.product.stock_quantity}{" "}
                          </span>
                          <button className="btn btn-sm px-3 border border-2">
                            <FaMinus />
                          </button>
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
          <div className="col-lg-4 pb-4">
            <div className="sticky-top bg-light py-3 px-4">
              <div className="fs-6 text-dark fw-bold mb-3">Ringkasan</div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="fs-6 text-dark fw-bold mb-5">Total</div>
                </div>
                <div className="col-lg-6 text-end">
                  <div className="text-dark fw-bold mb-5 h5">Rp 100.000</div>
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
