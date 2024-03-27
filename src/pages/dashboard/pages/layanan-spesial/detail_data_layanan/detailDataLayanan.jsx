import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import SpecialRequestService from "../../../../../services/specialRequest.service";
import noimg from "../../../../../assets/img/noimg.jpg";
import { useEffect, useState } from "react";
import {
  Toast,
  formatRupiah,
  getStatusBgClassName,
  getStatusName,
  myDate,
  showConfirmationDialog,
} from "../../../../../utils/GlobalFunction";
import Swal from "sweetalert2";

export const LayananSpesiaDetaillDashboard = () => {
  const { id } = useParams();
  const layananService = SpecialRequestService();
  const [dataDetailSpecialReq, setDataDetailSpecialReq] = useState();
  const [formData, setFormData] = useState({
    status: 1,
    alasan: "",
  });

  const dataStatus = [
    { label: "Waiting", status: 1, color: "text-info" }, //waiting
    { label: "Proses", status: 2, color: "text-warning" }, //proses
    { label: "Selesai", status: 3, color: "text-success" }, //selesai
    { label: "Ditolak", status: 0, color: "text-danger" }, //ditolak
  ];

  const handleUpdateStatus = async () => {
    const result = await showConfirmationDialog({
      title: "Data yang ingin ada update sudah sesuai?",
      icon: "warning",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        const data = {
          status: formData.status,
          idSpecialReq: id,
          alasan: formData.alasan,
        };
        const response = await layananService.handleUpdateStatusSpecialReq(
          data
        );
        if (response.status === 200) {
          setDataDetailSpecialReq(response.udpateSpecialReq);
          Toast.fire({
            icon: "success",
            title: "Status berhasil diupdate",
          });
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        Swal.fire("Gagal", "Terjadi kesalahan saat menghapus event.", "error");
      }
    }
  };

  const handleGetDetail = async () => {
    const response = await layananService.handleGetDetailSpecialReq(id);
    if (response.status === 200) {
      setDataDetailSpecialReq(response.data);
      setFormData({
        ...formData,
        status: response.data.status,
        alasan: response.data.alasan,
      });
    }
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        <div className="container-fluid py-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-4 mb-4">
              <li className="breadcrumb-item">
                <Link to="">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/dashboard/layanan-spesial">Layanan Spesial</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Nama Customer
              </li>
            </ol>
          </nav>

          <div className="row ps-3 mb-3">
            <div className="col-2 m-auto">Status</div>
            <div className="col-auto m-auto">:</div>
            <div className="col-3 fw-bold">
              <select
                className="form-select form-select-lg"
                name="statusLayanan"
                value={formData.status}
                style={{ fontSize: "1.1em" }}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: Number(e.target.value),
                    alasan: "",
                  })
                }
              >
                {dataStatus.map((data, index) => (
                  <option
                    key={index}
                    value={data.status}
                    style={{ fontSize: "1.1em" }}
                    className={``}
                  >
                    {getStatusName(data.status)}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <button
                className="btn btn-success h-100"
                onClick={() => handleUpdateStatus()}
              >
                Konfirmasi
              </button>
            </div>
          </div>

          {formData.status === 0 && (
            <div className="row ps-3 mb-3">
              <div className="col-2 m-auto">Alasan</div>
              <div className="col-auto m-auto">:</div>
              <div className="col-3 fw-bold">
                <textarea
                  value={formData.alasan}
                  onChange={(e) =>
                    setFormData({ ...formData, alasan: e.target.value })
                  }
                  style={{ height: "90px" }}
                  className="form-control mt-4"
                ></textarea>
              </div>
              <div className="col">&nbsp;</div>
            </div>
          )}
          <div className="card">
            <div
              className={`h5   text-light fw-bold py-2 px-3 ${
                dataDetailSpecialReq &&
                getStatusBgClassName(dataDetailSpecialReq.status)
              }`}
            >
              Pengirim
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-2">Nama</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">
                  {dataDetailSpecialReq && dataDetailSpecialReq.fullname}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2">No Handphone</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">
                  {dataDetailSpecialReq && dataDetailSpecialReq.phone_number}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Email</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">
                  {dataDetailSpecialReq && dataDetailSpecialReq.email}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Alamat</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">
                  {dataDetailSpecialReq && dataDetailSpecialReq.customer_city}
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className={`h5 text-light fw-bold py-2 px-3 ${
                dataDetailSpecialReq &&
                getStatusBgClassName(dataDetailSpecialReq.status)
              }`}
            >
              {dataDetailSpecialReq && dataDetailSpecialReq.service_type}
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-2">keterangan</div>
                <div className="col-auto">:</div>
                <div className="col">
                  {dataDetailSpecialReq && dataDetailSpecialReq.description}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Lokasi Proyek</div>
                <div className="col-auto">:</div>
                <div className="col">
                  {dataDetailSpecialReq &&
                    dataDetailSpecialReq.project_location}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Waktu Pengerjaan</div>
                <div className="col-auto">:</div>
                <div className="col">
                  {dataDetailSpecialReq && myDate(dataDetailSpecialReq.start_project)}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Estimasi Budget</div>
                <div className="col-auto">:</div>
                <div className="col">
                  {dataDetailSpecialReq &&
                    formatRupiah(dataDetailSpecialReq.budget_estimation)}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Foto</div>
                <div className="col-auto">:</div>
                <div className="col">
                  <img src={noimg} alt="" className="img-fluid" width="200" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
