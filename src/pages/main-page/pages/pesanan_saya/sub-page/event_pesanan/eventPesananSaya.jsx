import { useState } from "react";
import { SidebarPesanan } from "../../components/sidebar_pesanan";
import { ComponentCardTiketSaya } from "./components/cardTiketSaya";

export const EventPesananSaya = () => {
  const [subPage, setSubPage] = useState(0);

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
                    className={`nav-item ${
                      subPage === 0 && "bg-primary fw-bold"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      className={`nav-link mx-3 ${
                        subPage === 0 && "text-white"
                      }`}
                      onClick={() => setSubPage(0)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Tiket Saya
                    </a>
                  </li>
                  <li
                    className={`nav-item ${
                      subPage === 1 && "bg-primary fw-bold"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      className={`nav-link mx-3 ${
                        subPage === 1 && "text-white"
                      }`}
                      onClick={() => setSubPage(1)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Riwayat Event
                    </a>
                  </li>
                  <li
                    className={`nav-item ${
                      subPage === 2 && "bg-primary fw-bold"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      className={`nav-link mx-3 ${
                        subPage === 2 && "text-white"
                      }`}
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
                    <ComponentCardTiketSaya />
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
