import { useState } from "react";
import { SidebarPesanan } from "../../components/sidebar_pesanan";
import {
  getStatusBgClassName,
  getStatusName,
} from "../../../../../../utils/GlobalFunction";

export const RequestPesananSaya = () => {
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
                  <li className="nav-item">
                    <a
                      className="nav-link mx-3 active"
                      aria-current="page"
                      href="#"
                      style={{ fontSize: "1.1em" }}
                    >
                      Riwayat Layanan Spesial
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 bg-white p-3">
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
                        <td className="">{data.layanan}</td>
                        <td className="">{data.date}</td>
                        <td className="">
                          <span
                            className={`badge w-50 py-2 ${getStatusBgClassName(
                              data.status
                            )}`}
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
                <div className="col-lg-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam neque laboriosam aliquam! Dicta quae impedit voluptas ad
                  ratione! Nesciunt doloribus cupiditate earum hic quam libero
                  doloremque, eius quibusdam harum sequi! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Veritatis repellendus
                  officiis minima vitae asperiores aspernatur nisi voluptatibus
                  at, ad quisquam commodi ex facilis dolorum. Laborum, eveniet.
                  Possimus doloribus sequi sed?Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Asperiores laboriosam, alias
                  doloribus repudiandae vero officia dolores ex iste deserunt
                  ullam illo unde, magnam eaque debitis aspernatur natus facere,
                  harum tempore!
                </div>
                <div className="col text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere molestiae corporis sit provident tempora, amet error
                  quaerat numquam officia delectus assumenda neque doloremque.
                  Repudiandae temporibus, vero maxime praesentium neque odit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima veritatis aspernatur recusandae expedita nemo quod
                  rerum maiores omnis, quibusdam ut enim iure, totam laudantium
                  ducimus pariatur, quos molestias sed facere?Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Molestias debitis
                  distinctio eaque, voluptate explicabo fugiat dolorum, sapiente
                  autem saepe dolore nam officia eveniet, dolorem a ratione sit
                  consequatur quae iste?Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Quam dolorum natus expedita nihil rem
                  exercitationem neque aspernatur et, voluptas doloremque, odio
                  ipsam praesentium temporibus pariatur quae maxime voluptates,
                  eveniet cupiditate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
