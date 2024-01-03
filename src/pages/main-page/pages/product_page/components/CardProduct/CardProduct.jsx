/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CardProduct = () => {
   const [productData, setProductData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/product/get`);
            setProductData(response.data.data);
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

   return (
      <div className="row g-4">
         {productData.map((product) => (
            <ProductCard key={product.uuid} product={product} />
         ))}
      </div>
   );
};

const ProductCard = ({ product }) => {
   const { product_name, product_image, description, price } = product;

   return (
      <div className="col-lg-2 col-md-4 col-sm-6 mt-5">
         <div className="card h-100 rounded shadow-sm" key={product.uuid}>
            <CardImage imageUrl={product_image} />
            <div className="card-body p-3 h-100">
               <StarRating rating={1} />
               <TitleCard title={product_name} />
               <DescriptionCard description={description} />
               <div className="d-flex align-items-center justify-content-between mt-3">
                  <PriceCard price={price} />
                  <ButtonCart />
               </div>
            </div>
         </div>
      </div>
   );
};

const CardImage = ({ imageUrl }) => {
   const style = {
      objectFit: "cover",
      height: "55%"
   }
   return <img src={import.meta.env.VITE_API_URL+imageUrl} className="card-img-top img-fluid rounded" alt="Product Image" style={{ ...style, width: "100%" }} />;
};

const TitleCard = ({ title }) => {
   return <h6 className="card-title fs-8 text-3line">{title}</h6>;
};

const DescriptionCard = ({ description }) => {

   return <p className="card-text lh-sm mb-1 text-truncate fs-7">{description}</p>;
};

const PriceCard = ({ price }) => {
   return <h6 className="card-text fw-bold">Rp {price}</h6>;
};

const StarRating = ({ rating }) => {
   const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
         &#9733;
      </span>
   ));

   return <div className="star-rating">{stars}</div>;
};

const ButtonCart = () => {
   return <button className="btn border p-2 fw-semibold">Add To Cart</button>
}