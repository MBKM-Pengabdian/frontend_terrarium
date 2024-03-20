import { useEffect, useState } from "react";
import { SidebarPesanan } from "../../components/sidebar_pesanan";
import { Link } from "react-router-dom";
import EventService from "../../../../../../services/event.service";
import empty_tiket from "./../../../../../../assets/img/empty-event.svg";
import { ComponentCardTiketSaya } from "./components/cardTiketSaya";

export const EventPesananSaya = () => {
  const eventService = EventService();
  const [listMyTicket, setListMyTicket] = useState([]);
  const [subPage, setSubPage] = useState(0);

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
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <SidebarPesanan />
          </div>
          <div className="col">
            <div className="row g-3">
              <div className="col-12 bg-white">
                <ul className="nav py-2">
                  <li
                    className={`nav-item ${subPage === 0 && "bg-primary fw-bold"}`}
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      className={`nav-link mx-3 ${subPage === 0 && "text-white"}`}
                      onClick={() => setSubPage(0)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Tiket Saya
                    </a>
                  </li>
                  <li
                    className={`nav-item ${subPage === 1 && "bg-primary fw-bold"}`}
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      className={`nav-link mx-3 ${subPage === 1 && "text-white"}`}
                      onClick={() => setSubPage(1)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Riwayat Event
                    </a>
                  </li>
                  <li
                    className={`nav-item ${subPage === 2 && "bg-primary fw-bold"}`}
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      className={`nav-link mx-3 ${subPage === 2 && "text-white"}`}
                      onClick={() => setSubPage(2)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Event Lainnya
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 bg-white p-3">
                {subPage === 0 ? (
                  <>
                    {listMyTicket && listMyTicket.length > 0 ? (
                      listMyTicket.map((data, index) => (
                        <ComponentCardTiketSaya key={index} data={data} />
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
                  </>
                ) : subPage === 1 ? (
                  <>
                    Riwayat Event Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Numquam error iusto exercitationem neque
                    consectetur vero cumque atque, soluta, ullam sint est at qui
                    impedit modi. Pariatur sit officiis cum cumque!
                  </>
                ) : subPage === 2 ? (
                  <>
                    Event lainnya Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Fuga cum incidunt veniam obcaecati beatae
                    a, doloribus quas! Iusto qui similique nostrum at
                    perferendis laboriosam odio nesciunt, aliquid ea sint alias!
                  </>
                ) : (
                  <>
                    Event lainnya Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Architecto placeat ut voluptates vero,
                    eveniet quod quos natus assumenda, aperiam autem sequi
                    obcaecati, labore numquam vitae repudiandae inventore
                    molestiae dolor dolore?
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
