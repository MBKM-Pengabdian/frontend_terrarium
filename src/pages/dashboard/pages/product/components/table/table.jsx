import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { StyleSheetManager } from 'styled-components';
import { ModalProduct } from '../modal/modal';
import ProductService from '../../../../../../services/product.service';

const TableProduct = () => {
   const productService = ProductService();

   const [data, setData] = useState([]);
   const [filterText, setFilterText] = useState('');
   const [modalTitle, setModalTitle] = useState('');

   const handleFilterChange = (e) => {
      setFilterText(e.target.value);
   };

   const handleDeleteClick = async (productId) => {
      try {
         await productService.handleDeleteProduct(productId);
         const updatedProducts = await productService.handleGetAllProduct();
         setData(updatedProducts);
      } catch (error) {
         console.error('Error deleting product:', error);
      }
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const products = await productService.handleGetAllProduct();
            setData(products);
         } catch (error) {
            console.error('Error fetching products:', error);
         }
      };

      fetchData();
   }, []);

   const filteredData = (data.data || [])
      .filter((item) =>
         item.product_name.toLowerCase().includes(filterText.toLowerCase()) ||
         item.description.toLowerCase().includes(filterText.toLowerCase())
      )
      .map((item, index) => ({
         ...item,
         index: index + 1,
      }));

   const handleAddProductClick = () => {
      setModalTitle('Add Product');
   };

   const columns = [
      {
         name: 'No',
         selector: ({ index }) => index,
         width: '50px',
      },
      {
         name: 'Name',
         selector: ({ product_name }) => product_name,
      },
      {
         name: 'Image',
         selector: ({ product_image }) => (
            <img src={product_image} alt={product_image} style={{ width: '50px' }} />
         ),
      },
      {
         name: 'Price',
         selector: ({ price }) => 'Rp ' + price,
      },
      {
         name: 'Stock',
         selector: ({ stock_quantity }) => stock_quantity,
      },
      {
         name: 'Description',
         selector: ({ description }) => description,
      },
      {
         name: 'Action',
         cell: ({ uuid }) => (
            <button
               className="btn btn-danger btn-sm m-1"
               onClick={() => handleDeleteClick(uuid)}
            >
               Hapus
            </button>
         ),
      },
   ];

   return (
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'align'}>
         <ModalProduct title={modalTitle} />
         <DataTable
            columns={columns}
            data={filteredData}
            pagination
            sortactive={({ price }) => price}
            subHeader
            subHeaderComponent={
               <div className="d-flex justify-content-between align-items-center w-100">
                  <input
                     type="text"
                     placeholder="Cari Data Product"
                     value={filterText}
                     onChange={handleFilterChange}
                     className="form-control w-25"
                  />
                  <button
                     className="btn btn-success m-0"
                     data-bs-toggle="modal"
                     data-bs-target="#modal-product"
                     onClick={handleAddProductClick}
                  >
                     Add Product
                  </button>
               </div>
            }
            title="List Product"
         />
      </StyleSheetManager>
   );
};

export default TableProduct;
