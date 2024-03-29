import { useEffect, useState } from "react";
import { SidebarPesanan } from "../../components/sidebar_pesanan";
import {
  formatRupiah,
  getStatusBgClassName,
  getStatusName,
  myDate,
} from "../../../../../../utils/GlobalFunction";
import SpecialRequestService from "../../../../../../services/specialRequest.service";

export const RequestPesananSaya = () => {
  const specialReqService = SpecialRequestService();

  const [listRiwayatSpesialReq, setlistRiwayatSpesialReq] = useState([
    { layanan: "Renovasi Taman", date: "20-03-2024", status: 2 },
    { layanan: "Pembuatan Proyek Taman", date: "20-03-2024", status: 3 },
    {
      layanan: "Desain INterior Berbasis Taman",
      date: "20-03-2024",
      status: 1,
    },
    { layanan: "Kosultasi", date: "20-03-2024", status: 2 },
  ]);

  useEffect(() => {
    getSpecialRequestUser();
  }, []);

  const getSpecialRequestUser = async () => {
    const response = await specialReqService.handleGetSpecialRequestUser(
      localStorage.getItem("customer_id")
    );
    console.log(response.data);
    setlistRiwayatSpesialReq(response.data);
  };

  const [selectedRiwayat, setselectedRiwayat] = useState();
  return (
    <>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <SidebarPesanan />
          </div>
          <div className="col">
            <div className="row g-3">
              <div className="col-12 bg-white">
                <ul className="nav py-2">
                  <li className="nav-item bg-primary fw-bold">
                    <a
                      className="nav-link mx-3 text-white"
                      style={{ fontSize: "1.1em" }}
                    >
                      Riwayat Layanan Spesial
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 bg-white p-3">
                <div className="table-responsive">
                  <table
                    className="table table-hover"
                    style={{ cursor: "pointer" }}
                  >
                    <thead>
                      <tr>
                        <th width="20" className="ps-2">
                          No
                        </th>
                        <th className="ps-2">Layanan</th>
                        <th className="ps-2">Tanggal Proyek</th>
                        <th className="ps-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listRiwayatSpesialReq.map((data, index) => (
                        <tr
                          key={index}
                          onClick={() => setselectedRiwayat(data)}
                          data-bs-toggle="modal"
                          data-bs-target="#modalDetailrequest"
                        >
                          <th className="">{index + 1}</th>
                          <td className="">{data.service_type}</td>
                          <td className="">{myDate(data.start_project)}</td>
                          <td className="">
                            <span
                              className={`badge py-2 fw-bold ${getStatusBgClassName(
                                data.status
                              )}`}
                              style={{ minWidth: "50%" }}
                            >
                              {getStatusName(data.status)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALERT bAYAR */}
      <div
        className="modal fade modal-xl"
        id="modalDetailrequest"
        tabIndex="-1"
        aria-labelledby="modalLabelDaftar"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="col bg-light rounded-top">
              <div className="row">
                <div className="col m-auto">
                  <div className="fw-bold text-dark fs-5 p-3 ">
                    {selectedRiwayat && selectedRiwayat.layanan}
                    <span
                      className={`mx-3 badge ${getStatusBgClassName(
                        selectedRiwayat && selectedRiwayat.status
                      )}`}
                      style={{ fontSize: "12px" }}
                    >
                      {getStatusName(selectedRiwayat && selectedRiwayat.status)}
                    </span>
                    <span className="fs-6 text-muted">
                      <u>
                        {selectedRiwayat && selectedRiwayat.status == 0 ? (
                          <>
                            |
                            <u
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#modalAlasan"
                              className="ms-3"
                              style={{ cursor: "pointer" }}
                            >
                              Alasan
                            </u>
                          </>
                        ) : (
                          ""
                        )}
                      </u>
                    </span>
                  </div>
                </div>
                <div className="col text-end">
                  <div className="fw-bold text-dark fs-5 p-3 rounded-top">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-danger"
                    >
                      Kembali
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3 p-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row mb-4">
                    <div className="col-lg-4 fw-bold text-dark">Nama</div>
                    <div className="col-auto">:</div>
                    <div className="col fs-5">
                      {selectedRiwayat && selectedRiwayat.fullname}
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-4 fw-bold text-dark">
                      No Handphone
                    </div>
                    <div className="col-auto">:</div>
                    <div className="col fs-5">
                      {selectedRiwayat && selectedRiwayat.phone_number}
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-4 fw-bold text-dark">Email</div>
                    <div className="col-auto">:</div>
                    <div className="col fs-5">
                      {selectedRiwayat && selectedRiwayat.email}
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-4 fw-bold text-dark">Alamat</div>
                    <div className="col-auto">:</div>
                    <div className="col fs-5">
                      {selectedRiwayat && selectedRiwayat.customer_city}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <div className="fw-bold text-dark mb-2">Foto Lokasi</div>
                    <div className="img">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1675039871605-eb156cc0575d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="img-fluid"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="fw-bold text-dark mb-2">Deskripsi</div>
                    <div className="">
                      {selectedRiwayat && selectedRiwayat.description}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="fw-bold text-dark mb-2">
                          Lokasi Proyek
                        </div>
                        <div className="">
                          {selectedRiwayat && selectedRiwayat.project_location}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="fw-bold text-dark mb-2">
                          Waktu Pengerjaan
                        </div>
                        <div className="">
                          {selectedRiwayat &&
                            myDate(selectedRiwayat.start_project)}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="fw-bold text-dark mb-2">
                          Estimasi Budget
                        </div>
                        <div className="">
                          {selectedRiwayat &&
                            formatRupiah(selectedRiwayat.budget_estimation)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALERT DITOLAK */}
      <div
        className="modal fade modal-md"
        id="modalAlasan"
        tabIndex="-1"
        aria-labelledby="modalLabelAlasan"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="col bg-light rounded-top">
              <div className="row">
                <div className="col m-auto">
                  <div className="fw-bold text-dark fs-5 p-3 ">
                    Alasan Penolakan
                  </div>
                </div>
                <div className="col text-end">
                  <div className="fw-bold text-dark fs-5 p-3 rounded-top">
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-danger"
                    >
                      Kembali
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 ">
              <p>{selectedRiwayat && selectedRiwayat.alasan}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
