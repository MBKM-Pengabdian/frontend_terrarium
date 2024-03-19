import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import SpecialRequestService from "../../../../../services/specialRequest.service";
import noimg from "../../../../../assets/img/noimg.jpg";

import { useEffect, useState } from "react";

export const LayananSpesiaDetaillDashboard = () => {
  const { id } = useParams();
  const layananService = SpecialRequestService();
  const [formData, setFormData] = useState({
    status: "1",
  });

  const dataStatus = [
    { label: "Waiting", status: 1, color: "text-info" }, //waiting
    { label: "Proses", status: 2, color: "text-warning" }, //proses
    { label: "Selesai", status: 3, color: "text-success" }, //selesai
    { label: "Ditolak", status: 0, color: "text-danger" }, //ditolak
  ];

  const handleGetDetail = async () => {
    const response = await layananService.handleGetSpecialRequest(id);
    if (response.status === 200) {
      console.log(response.data.product);
    }
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  const getStatusClassName = (status) => {
    switch (status) {
        case 1:
            return "bg-info";
        case 2:
            return "bg-warning";
        case 3:
            return "bg-success";
        case 0:
            return "bg-danger";
        default:
            return "";
    }
};

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
                style={{ fontSize: "1.1em" }}
                onChange={(e) =>
                  setFormData({ ...formData, status: Number(e.target.value) })
                }
              >
                {dataStatus.map((data, index) => (
                  <option
                    key={index}
                    value={data.status}
                    style={{ fontSize: "1.1em" }}
                    className={``}
                  >
                    {data.label}
                  </option>
                ))}
              </select>
              {formData.status === 0 && (
                <div className="">
                  <textarea
                    name=""
                    style={{ height: "90px" }}
                    className="form-control mt-4"
                  ></textarea>
                  <small id="helpId" className="text-muted">
                    * Alasan
                  </small>
                </div>
              )}
            </div>
            <div className="col">
              <button className="btn btn-info h-100">Konfirmasi</button>
            </div>
          </div>
          <div className="card">
            <div
              className={`h4 text-light fw-bold py-2 px-3 ${getStatusClassName(1)}`}
            >
              Pengirim
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-2">Nama</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">Muhammad Syahputra</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">No Handphone</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">08887599774</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Email</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">putramhmmd22@gmail.com</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Alamat</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">Medan Marelan</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`h4 text-light fw-bold py-2 px-3 ${getStatusClassName(1)}`}>
              Renovasi Taman
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-2">keterangan</div>
                <div className="col-auto">:</div>
                <div className="col">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium mollitia eius voluptatum architecto unde, sed
                  aliquam excepturi possimus dolorem quis at necessitatibus qui
                  quidem neque! Doloremque vel recusandae modi et quasi itaque
                  laborum eveniet architecto inventore ea libero, fugit
                  consequuntur. Iure quam similique quos nulla, minima dolorum
                  aliquam voluptates optio perferendis, voluptatem corrupti eos
                  blanditiis sed accusantium corporis. Ad quae exercitationem,
                  doloremque quos impedit eos saepe illo veniam aliquid
                  veritatis consectetur qui accusantium sint odit pariatur, est,
                  dicta totam asperiores. Maiores ad architecto, nemo facilis
                  illo libero placeat, quibusdam animi qui magnam dolorum. Odio
                  ipsum nemo voluptatibus praesentium, harum eius.
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Lokasi Proyek</div>
                <div className="col-auto">:</div>
                <div className="col">Medan Sunggal</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Waktu Pengerjaan</div>
                <div className="col-auto">:</div>
                <div className="col">2024-02-22</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Estimasi Budget</div>
                <div className="col-auto">:</div>
                <div className="col">Rp. -</div>
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
