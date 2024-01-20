import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { StyleSheetManager } from "styled-components";
import EventService from "../../../../../../services/event.service";
import { ModalEvent } from "../modal/modal";
import Swal from "sweetalert2";
import {
  Toast,
  showConfirmationDialog,
} from "../../../../../../utils/GlobalFunction";
// import { ModalProduct } from '../modal/modal';

const TableEvent = () => {
  const eventService = EventService();

  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleDeleteClick = async (eventId) => {
    const result = await showConfirmationDialog({
      title: "Apakah anda yakin ingin menghapus event ini?",
      icon: "warning",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await eventService.handleDeleteEvent(eventId);
        const updatedEvents = await eventService.handleGetAllEvent();
        setData(updatedEvents);
        Toast.fire({
          icon: "success",
          title: "Event berhasil dihapus",
        });
      } catch (error) {
        console.error("Error deleting event:", error);
        Swal.fire("Gagal", "Terjadi kesalahan saat menghapus event.", "error");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await eventService.handleGetAllEvent();
        setData(events);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = (data.data || [])
    .filter(
      (item) =>
        item.title_event.toLowerCase().includes(filterText.toLowerCase())
      // item.description.toLowerCase().includes(filterText.toLowerCase())
    )
    .map((item, index) => ({
      ...item,
      index: index + 1,
    }));

  const handleAddEventClick = () => {
    setModalTitle("Add Event");
  };

  const columns = [
    {
      name: "No",
      selector: ({ index }) => index,
      width: "50px",
    },
    {
      name: "Name",
      selector: ({ title_event }) => title_event,
      width: "250px",
    },
    {
      name: "Image",
      selector: ({ img_event }) => (
        <img
          src={import.meta.env.VITE_API_URL + img_event}
          alt={import.meta.env.VITE_API_URL + img_event}
          style={{ width: "50px" }}
        />
      ),
    },
    {
      name: "Price",
      selector: ({ price_event }) => "Rp " + price_event,
    },
    {
      name: "Kuota",
      selector: ({ detail_event }) =>
        detail_event[0] ? detail_event[0].kuota_event : "",
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
      width: "200px",
    },
  ];

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "align"}>
      <ModalEvent title={modalTitle} />
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
              placeholder="Cari Data Event"
              value={filterText}
              onChange={handleFilterChange}
              className="form-control w-25"
            />
            <button
              className="btn btn-success m-0"
              data-bs-toggle="modal"
              data-bs-target="#modal-product"
              onClick={handleAddEventClick}
            >
              Add Event
            </button>
          </div>
        }
        title="List Events"
      />
    </StyleSheetManager>
  );
};

export default TableEvent;
