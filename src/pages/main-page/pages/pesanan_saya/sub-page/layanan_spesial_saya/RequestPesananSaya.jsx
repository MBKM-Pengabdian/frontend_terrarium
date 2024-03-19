import { SidebarPesanan } from "../../components/sidebar_pesanan";

export const RequestPesananSaya = () => {
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
                  <li className="nav-item">
                    <a
                      className="nav-link mx-3 active"
                      aria-current="page"
                      href="#"
                      style={{ fontSize: "1.1em" }}
                    >
                      Semua
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mx-3 active"
                      aria-current="page"
                      href="#"
                      style={{ fontSize: "1.1em" }}
                    >
                      Menunggu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mx-3"
                      href="#"
                      style={{ fontSize: "1.1em" }}
                    >
                      Diproses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mx-3"
                      href="#"
                      style={{ fontSize: "1.1em" }}
                    >
                      Disetujui
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mx-3"
                      href="#"
                      style={{ fontSize: "1.1em" }}
                    >
                      Ditolak
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 bg-white p-3">
                <h3>Request Saya</h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus, numquam velit doloribus deleniti odit ea at repellendus
                officiis quas unde fugit similique, fugiat, dicta quasi soluta
                amet magnam laboriosam voluptatibus!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
