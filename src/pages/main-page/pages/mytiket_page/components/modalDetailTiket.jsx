import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import {
  getNamaBulan,
  getTahun,
  getTanggal,
  getWaktu,
} from "../../../../../utils/GlobalFunction";

export const ModalDetailTiket = ({ title }) => {
  const navigate = useNavigate();

  const openModal = () => {
    const isAuthenticated = localStorage.getItem("accessToken_customer");
    if (!isAuthenticated) {
      navigate("/user-login");
      return;
    }

    var modal = new bootstrap.Modal(document.getElementById("modalTiket"));
    modal.show();
  };

  return (
    <>
      <button
        className="btn bg-primary text-light fw-bold"
        type="button"
        onClick={() => openModal()}
      >
        Lihat Tiket
      </button>

      <div
        className="modal fade modal-xl"
        id="modalTiket"
        tabIndex="-1"
        aria-labelledby="modalLabelDaftar"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <h1
              className="modal-title fs-5 bg-light px-3 py-2"
              id="modalLabelDaftar"
            >
              <div className="row justify-content-between">
                <div className="col m-auto">{title}</div>
                <div className="col text-end m-auto">
                  <button className="btn bg-danger text-light fw-bold">
                    Download Tiket
                  </button>
                </div>
              </div>
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Kembali
            </button>
            <div className="modal-body">
              <div className="card border border-2 border-dark">
                <div className="card-body bg-light">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="receipt-text-normal">
                        Event Cacti Life
                      </div>
                      <div className="receipt-text-bold text-dark fw-bold mb-4">
                        Workshop Tanaman Hidroponik
                      </div>
                      <div className="receipt-text-normal">Zoom</div>
                      <div className="fs-5 text-dark mb-4 receipt-text-bold">
                        <span className="me-1">
                          {getTanggal("2024-01-25 08:00")}
                        </span>
                        <span className="me-1">
                          {getNamaBulan("2024-01-25 08:00")}
                        </span>
                        <span className="me-1">
                          {getTahun("2024-01-25 08:00")},
                        </span>
                        <span className="me-1">
                          {getWaktu("2024-01-25 08:00")}
                        </span>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="text-dark receipt-text-bold">
                            Dibuat Untuk
                          </div>
                          <div className="text-dark mb-4 receipt-text-normal">
                            Muhammad Syahputra
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="receipt-text-bold text-dark">
                            Nomor Pendaftar
                          </div>
                          <div className="receipt-text-normal text-dark">
                            CT0273827
                          </div>
                          <div className="receipt-text-normal text-dark">
                            Terdaftar
                          </div>
                          <div className="receipt-text-normal text-dark mb-4">
                            22 Jan 2024
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="text-dark receipt-text-bold">
                            Tiket
                          </div>
                          <div className="receipt-text-normal text-dark mb-4">
                            RSVP
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-end m-auto bg-white p-4">
                      <QRCode value="putra" size={210} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
