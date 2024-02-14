import { Link, useParams } from "react-router-dom";
import ProductService from "../../../../services/product.service";
import { useEffect, useState } from "react";

export const DetailProductPage = () => {
  const { id } = useParams();
  const productservice = ProductService();
  const [detailProduct, setdetailProduct] = useState();

  useEffect(() => {
    handlegetDetail();
  }, []);

  const handlegetDetail = async () => {
    const response = await productservice.handleGetDetailProduct(id);
    if (response.status === 200) {
      setdetailProduct(response.data);
      console.log(response.data);
    }
  };
  return (
    <>
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <Link to='/product'>Product</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {detailProduct && detailProduct.product.product_name}
            </li>
          </ol>
        </nav>
        {detailProduct && (
          <div className="row">
            <div className="col-lg-4">
              <img
                src={
                  import.meta.env.VITE_API_URL +
                  detailProduct.product.product_image
                }
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-8">
              <div className="h5">{detailProduct.product.product_name}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
