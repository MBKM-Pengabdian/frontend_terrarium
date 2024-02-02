/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Toast } from "../../../../../../utils/GlobalFunction";
import CartService from "../../../../../../services/cart.service";
import ProductService from "../../../../../../services/product.service";

// // const StarRating = ({ rating }) => {
// //   const stars = Array.from({ length: 5 }, (_, index) => (
// //     <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
// //       &#9733;
// //     </span>
// //   ));

// //   return <div className="star-rating">{stars}</div>;
// // };

export const CardProduct = () => {
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
          <div key={index} className="card p-0" style={{ width: "18rem" }}>
            <img
              style={{
                objectFit: "cover",
                height: "55%",
              }}
              src={import.meta.env.VITE_API_URL + product.product_image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-2line">{product.product_name}</h5>
              <p className="card-text fw-bold mt-">Rp {product.price}</p>
              <button
                href="#"
                className="btn bg-primary text-light"
                onClick={() => handleAddCart(product.uuid)}
              >
                <FaCartPlus />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
