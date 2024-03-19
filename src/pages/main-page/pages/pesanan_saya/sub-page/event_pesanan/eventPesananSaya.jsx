import { useState } from "react";
import { SidebarPesanan } from "../../components/sidebar_pesanan";

export const EventPesananSaya = () => {
  const [fotoBukti, setFotoBukti] = useState(null);
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
                <div className="h3">Event Saya</div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia facere a et voluptate nulla sed eligendi, quidem nobis distinctio ex voluptas atque repellat assumenda tenetur magni ut labore inventore neque.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade modal-md"
        id="modalUpload"
        tabIndex="-1"
        aria-labelledby="modalLabelDaftar"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="mb-3">
              <div className="mb-3">
                <img
                  src={fotoBukti}
                  alt=""
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
              <label htmlFor="formFile" className="form-label">
                Upload Foto Bukti
              </label>
              <input
                className="form-control"
                type="file"
                onChange={(e) =>
                  setFotoBukti(URL.createObjectURL(e.target.files[0]))
                }
                accept=".jpg, .jpeg, .png"
                id="formFile"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
