import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import {
  getStatusBgClassName,
  getStatusName,
} from "../../../../../../utils/GlobalFunction";
import SpecialRequestService from "../../../../../../services/specialRequest.service";
import { useNavigate } from "react-router-dom";

const TableLayananSpesial = () => {
  const navigate = useNavigate();
  const specialRequestService = SpecialRequestService();

  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleDeleteClick = async (productId) => {
    // const result = await showConfirmationDialog({
    //   title: "Apakah anda yakin ingin menghapus Product ini?",
    //   icon: "warning",
    //   confirmButtonText: "Ya, Hapus!",
    //   cancelButtonText: "Batal",
    // });
    // if (result.isConfirmed) {
    //   try {
    //     await productService.handleDeleteProduct(productId);
    //     const updatedProducts = await productService.handleGetAllProduct();
    //     setData(updatedProducts);
    //     Toast.fire({
    //       icon: "success",
    //       title: "Product berhasil dihapus",
    //     });
    //   } catch (error) {
    //     console.error("Error deleting product:", error);
    //     Swal.fire(
    //       "Gagal",
    //       "Terjadi kesalahan saat menghapus product.",
    //       "error"
    //     );
    //   }
    // }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await specialRequestService.handleGetSpecialRequest();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = (data.data || [])
    .filter(
      (item) =>
        item.fullname.toLowerCase().includes(filterText.toLowerCase()) ||
        item.service_type.toLowerCase().includes(filterText.toLowerCase())
    )
    .map((item, index) => ({
      ...item,
      index: index + 1,
    }));

  const columns = [
    {
      name: "No",
      selector: ({ index }) => index,
      width: "50px",
    },
    {
      name: "Request Custumer",
      selector: ({ service_type }) => service_type,
    },
    {
      name: "Lokasi Project",
      selector: ({ project_location }) => project_location,
    },
    {
      name: "Nama",
      selector: ({ fullname }) => fullname,
    },
    {
      name: "No Telp",
      selector: ({ phone_number }) => phone_number,
    },
    {
      name: "Email",
      selector: ({ email }) => email,
    },
    {
      name: "Status",
      cell: ({ status }) => (
        <div className="text-center">
          <span className={`badge p-2 ${getStatusBgClassName(status)}`}>
            {getStatusName(status)}
          </span>
        </div>
      ),
    },
    {
      name: "Action",
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
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "align"}>
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
          </div>
        }
        title="List Request Spesial Customer"
        onRowClicked={(rowData) =>
          navigate(`/dashboard/layanan-spesial/${rowData.uuid}`)
        }
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

export default TableLayananSpesial;
