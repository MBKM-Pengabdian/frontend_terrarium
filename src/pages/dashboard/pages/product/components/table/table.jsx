import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import { ModalProduct } from "../modal/modal";
import ProductService from "../../../../../../services/product.service";
import Swal from "sweetalert2";
import {
  Toast,
  showConfirmationDialog,
} from "../../../../../../utils/GlobalFunction";
import { useNavigate } from "react-router-dom";

const TableProduct = () => {
  const navigate = useNavigate();
  const productService = ProductService();

  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleDeleteClick = async (productId) => {
    const result = await showConfirmationDialog({
      title: "Apakah anda yakin ingin menghapus Product ini?",
      icon: "warning",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await productService.handleDeleteProduct(productId);
        const updatedProducts = await productService.handleGetAllProduct();
        setData(updatedProducts);
        Toast.fire({
          icon: "success",
          title: "Product berhasil dihapus",
        });
      } catch (error) {
        console.error("Error deleting product:", error);
        Swal.fire(
          "Gagal",
          "Terjadi kesalahan saat menghapus product.",
          "error"
        );
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await productService.handleGetAllProduct();
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = (data.data || [])
    .filter(
      (item) =>
        item.product_name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.description.toLowerCase().includes(filterText.toLowerCase())
    )
    .map((item, index) => ({
      ...item,
      index: index + 1,
    }));

  const handleAddProductClick = () => {
    setModalTitle("Add Product");
  };

  const columns = [
    {
      name: "No",
      selector: ({ index }) => index,
      width: "50px",
    },
    {
      name: "Name",
      selector: ({ product_name }) => product_name,
    },
    {
      name: "Image",
      selector: ({ product_image }) => (
        <img
          src={import.meta.env.VITE_API_URL + product_image}
          alt={import.meta.env.VITE_API_URL + product_image}
          style={{ width: "50px" }}
        />
      ),
    },
    {
      name: "Price",
      selector: ({ price }) => "Rp " + price,
    },
    {
      name: "Stock",
      selector: ({ stock_quantity }) => stock_quantity,
    },
    {
      name: "Action",
      cell: ({ uuid }) => (
        <button
          className="btn btn-info btn-sm m-1"
          onClick={() => navigate(`/dashboard/product/${uuid}`)}
        >
          Detail
        </button>
      ),
    },
  ];

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "align"}>
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
        onRowClicked={(rowData) => navigate(`/dashboard/product/${rowData.uuid}`)}
        customStyles={{
          rows: {
            style: {
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                color: "#007bff",
              },
            },
          },
        }}
      />
    </StyleSheetManager>
  );
};

export default TableProduct;
