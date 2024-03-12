import { Link } from "react-router-dom";
import img_banner1 from "./../../../../assets/img/banner-1.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import {
  getNamaBulan,
  getTahun,
  getTanggal,
  getWaktu,
  myDate,
} from "../../../../utils/GlobalFunction";
// import { ModalDetailTiket } from "./components/modalDetailTiket";
import EventService from "../../../../services/event.service";
import empty_tiket from "../../../../assets/img/empty-event.svg";

export const MyTicketPage = () => {
  const eventService = EventService();
  const [listMyTicket, setListMyTicket] = useState([
    // {
    //   date: "2024-03-03 09:15",
    //   title_event: "Seminar Kewirausahaan",
    //   place: "Aula Universitas ABC",
    //   pembicara: "Prof. Ahmad Ridwan, MBA",
    // },
  ]);
  const [selectedTicket, setSelectedTicket] = useState();

  useEffect(() => {
    handleGetTicket();
  }, []);

  const handleGetTicket = async () => {
    try {
      const response = await eventService.handleGetTicketEvent();
      if (response.status === 200) {
        setListMyTicket(response.data);
        console.log(response.data);
      }

      // console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="container-fluid py-5 mb-5"
        style={{
          background: `url(${img_banner1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5">
          <div className="text-white h1 text-center">Tiket Event Saya</div>
          <div className="text-white mb-3 h4 text-center">List tiket saya</div>
        </div>
      </div>
      <div className="container bg-white card py-3">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="h4">Tiket Saya</div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="form-group d-flex">
              <label htmlFor="" className="w-25 m-auto">
                Sort By:
              </label>
              <select name="" id="" className="form-select w-50">
                <option value="">All</option>
                <option value="">Selesai</option>
                <option value="">Akan</option>
              </select>
            </div>
          </div>
          <hr />
        </div>

        {listMyTicket && listMyTicket.length > 0 ? (
          listMyTicket.map((data, index) => (
            <div className="card-body row my-4" key={index}>
              <div className="col-5 col-lg-2 col-md-3 col-sm-3">
                <div className="row g-1">
                  <div className="col text-center shadow-sm">
                    <div className="h2">
                      {getTanggal(
                        data.event_data && data.event_data.date_event
                      )}
                    </div>
                    <div className="h5">
                      {getNamaBulan(
                        data.event_data && data.event_data.date_event
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-10 col-md-6 col-sm-6 m-auto">
                <div className="row gap-2">
                  <div className="col-lg-5">
                    <div className="h5" style={{ fontSize: "1.2em" }}>
                      {data.event_data && data.event_data.title_event}
                    </div>
                    <div className="mb-2">
                      {getWaktu(data.event_data && data.event_data.date_event)}{" "}
                      - Selesai
                    </div>
                    <div className="">
                      <FaMapMarkerAlt className="me-2" />{" "}
                      {data.event_data && data.event_data.place}
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-12 col-sm-12 m-auto text-lg-center">
                    {data.place}
                  </div>
                  <div className="col-10 col-lg-2 col-md-5 col-sm-5 m-auto">
                    {/* <ModalDetailTiket title="Tiket Anda" data={data} /> */}
                    <button
                      onClick={() => setSelectedTicket(data)}
                      type="button"
                      className="btn bg-primary text-light fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#modalTiket"
                    >
                      Lihat Tiket
                    </button>
                    {/* <button className="btn bg-primary text-light fw-bold ">
                  Lihat Tiket
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <img
              src={empty_tiket}
              className="img-fluid"
              style={{ width: "200px" }}
              alt="empty cart"
            />
            <div className="h5 my-3 text-muted">
              Anda belum mendaftar event apapun
            </div>
            <div className="mt-3">
              <Link
                to="/event"
                href="#"
                className="btn btn-success btn-square mt-2 fs-6"
              >
                Cari Event
              </Link>
            </div>
          </div>
        )}

        {/* ALERT */}
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
                className="modal-title fs-5 bg-dark fw-bold px-3 py-2"
                id="modalLabelDaftar"
              >
                <div className="row justify-content-between">
                  <div className="col m-auto text-light fw-bold">
                    Detail Tiket
                  </div>
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
                          {selectedTicket &&
                            selectedTicket.event_data.title_event}
                        </div>
                        <div className="receipt-text-normal">
                          {selectedTicket && selectedTicket.event_data.place}
                        </div>
                        <div className="fs-5 text-dark mb-4 receipt-text-bold">
                          <span className="me-1">
                            {getTanggal(
                              selectedTicket &&
                                selectedTicket.event_data.date_event
                            )}
                          </span>
                          <span className="me-1">
                            {getNamaBulan(
                              selectedTicket &&
                                selectedTicket.event_data.date_event
                            )}
                          </span>
                          <span className="me-1">
                            {getTahun(
                              selectedTicket &&
                                selectedTicket.event_data.date_event
                            )}
                            ,
                          </span>
                          <span className="me-1">
                            {getWaktu(
                              selectedTicket &&
                                selectedTicket.event_data.date_event
                            )}
                          </span>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="text-dark receipt-text-bold">
                              Dibuat Untuk
                            </div>
                            <div className="text-dark mb-4 receipt-text-normal">
                              {selectedTicket &&
                                selectedTicket.customer_data.fullname_customer}
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="receipt-text-bold text-dark">
                              Nomor Pendaftar
                            </div>
                            <div className="receipt-text-normal text-dark mb-3">
                              {selectedTicket &&
                                selectedTicket.event_data.token_registration}
                            </div>
                            <div className="receipt-text-normal text-dark">
                              Terdaftar
                            </div>
                            <div className="receipt-text-normal text-dark mb-4">
                              {selectedTicket &&
                                myDate(selectedTicket.created_at)}
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
                        <QRCode
                          value={
                            selectedTicket &&
                            selectedTicket.event_data.token_registration
                          }
                          size={210}
                        />
                      </div>
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
