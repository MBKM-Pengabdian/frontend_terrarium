import { Link } from "react-router-dom";
import img_banner1 from "./../../../../assets/img/banner-1.jpg";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  getNamaBulan,
  getTanggal,
  getWaktu,
} from "../../../../utils/GlobalFunction";
import { ModalDetailTiket } from "./components/modalDetailTiket";
import EventService from "../../../../services/event.service";

export const MyTicketPage = () => {
  const eventService = EventService()
  const [listMyTicket, setListMyTicket] = useState([
    {
      date: "2024-03-03 09:15",
      title_event: "Seminar Kewirausahaan",
      place: "Aula Universitas ABC",
      pembicara: "Prof. Ahmad Ridwan, MBA",
    },
  ]);

  useEffect(() => {
    // handleGetTicket()
  }, [])

  const handleGetTicket = async () => {
    try {
      const response = await eventService.handleGetTicketEvent()
      if (response.status === 200) {
        setListMyTicket(response.data)
      }

      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  }

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

        {listMyTicket &&
          listMyTicket.map((data, index) => (
            <div className="card-body row my-4" key={index}>
              <div className="col-5 col-lg-2 col-md-3 col-sm-3">
                <div className="row g-1">
                  <div className="col text-center shadow-sm">
                    <div className="h2">{getTanggal(data.date)}</div>
                    <div className="h5">{getNamaBulan(data.date)}</div>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-10 col-md-6 col-sm-6 m-auto">
                <div className="row gap-2">
                  <div className="col-lg-5">
                    <div className="h5" style={{ fontSize: '1.2em' }}>{data.title_event}</div>
                    <div className="mb-2">{getWaktu(data.date)} - Selesai</div>
                    <div className="">
                      <FaUser className="me-2" /> {data.pembicara}
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-12 col-sm-12 m-auto text-lg-center">
                    {data.place}
                  </div>
                  <div className="col-10 col-lg-2 col-md-5 col-sm-5 m-auto">
                    <ModalDetailTiket title="Tiket Anda" />
                    {/* <button className="btn bg-primary text-light fw-bold ">
                      Lihat Tiket
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
