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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}api/product/get`);
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
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
         {productData.map((product) => (
            <ProductCard key={product.uuid} product={product} />
         ))}
      </div>
   );
};

const ProductCard = ({ product }) => {
   const { product_name, product_image, description, price } = product;

   const style = {
      width: '18%'
   }

   return (
      <div className="col-lg-3" style={style}>
         <div className="card h-100 rounded" key={product.uuid}>
            <CardImage imageUrl={product_image} />
            <div className="card-body p-3">
               <TitleCard title={product_name} />
               <DescriptionCard description={description} />
               <PriceCard price={price} />
            </div>
         </div>
      </div>
   );
};

const CardImage = ({ imageUrl }) => {
   const style = {
      objectFit: "cover"
   }
   return <img src={imageUrl} className="card-img-top img-fluid h-50" alt="Product Image" style={style} />;
};

const TitleCard = ({ title }) => {
   return <h6 className="card-title">{title}</h6>;
};

const DescriptionCard = ({ description }) => {

   return <p className="card-text lh-sm mb-1 text-truncate">{description}</p>;
};

const PriceCard = ({ price }) => {
   return <h6 className="card-text lh-1.4">Rp {price}</h6>;
};
