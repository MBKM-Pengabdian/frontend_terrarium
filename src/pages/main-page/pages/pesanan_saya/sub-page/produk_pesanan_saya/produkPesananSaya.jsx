import { SidebarPesanan } from "../../components/sidebar_pesanan";

export const ProdukPesananSaya = () => {
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
                <div className="h3">Produk Pesanan Saya</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                adipisci pariatur tempore, eveniet consequatur rerum, aspernatur
                dolore quam esse eos suscipit ex repellat deserunt. Placeat,
                mollitia architecto. Tenetur, voluptas quaerat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
