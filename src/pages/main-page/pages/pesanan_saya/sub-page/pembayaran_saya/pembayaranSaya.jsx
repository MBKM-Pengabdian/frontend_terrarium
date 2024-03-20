import { useState } from "react";
import { SidebarPesanan } from "../../components/sidebar_pesanan";
import { ComponentCardPembayaran } from "./components/cardPembayaran";
import { CompnentEmptyPembayaran } from "./components/emptyPembayaran";
import imgEmptypay from "./../../../../../../assets/img/empty-pay.svg";

export const PembayaranSaya = () => {
  const [listPembayaran, setListPembayaran] = useState([
    {
      tipe: "Event",
      judul: "lorem ipsum dolor sit amet",
      price: "400000",
      status: 0,
    },
    {
      tipe: "Event",
      judul: "lorem ipsum dolor sit amet",
      price: "400000",
      status: 1,
    },
    {
      tipe: "Event",
      judul: "lorem ipsum dolor sit amet",
      price: "400000",
      status: 1,
    },
    {
      tipe: "Product",
      judul: "lorem ipsum dolor sit amet",
      price: "400000",
      status: 2,
    },
    {
      tipe: "Event",
      judul: "lorem ipsum dolor sit amet",
      price: "400000",
      status: 3,
    },
    {
      tipe: "Event",
      judul: "lorem ipsum dolor sit amet",
      price: "400000",
      status: 3,
    },
  ]);
  const [selectedStatus, setselectedStatus] = useState(null);


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
                  <li className={`nav-item ${selectedStatus === null && "bg-primary fw-bold"}`} style={{ cursor: 'pointer' }}>
                    <a
                      className={`nav-link mx-3 ${selectedStatus === null && "text-white"}`}
                      onClick={() => setselectedStatus(null)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Semua
                    </a>
                  </li>
                  <li className={`nav-item ${selectedStatus === 1 && "bg-primary fw-bold"}`} style={{ cursor: 'pointer' }}>
                    <a
                      className={`nav-link mx-3 ${selectedStatus === 1 && "text-white"}`}
                      onClick={() => setselectedStatus(1)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Menunggu
                    </a>
                  </li>
                  <li className={`nav-item ${selectedStatus === 2 && "bg-primary fw-bold"}`} style={{ cursor: 'pointer' }}>
                    <a
                     className={`nav-link mx-3 ${selectedStatus === 2 && "text-white"}`}
                      onClick={() => setselectedStatus(2)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Diproses
                    </a>
                  </li>
                  <li className={`nav-item ${selectedStatus === 3 && "bg-primary fw-bold"}`} style={{ cursor: 'pointer' }}>
                    <a
                      className={`nav-link mx-3 ${selectedStatus === 3 && "text-white"}`}
                      onClick={() => setselectedStatus(3)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Disetujui
                    </a>
                  </li>
                  <li className={`nav-item ${selectedStatus === 0 && "bg-primary fw-bold"}`} style={{ cursor: 'pointer' }}>
                    <a
                      className={`nav-link mx-3 ${selectedStatus === 0 && "text-white"}`}
                      onClick={() => setselectedStatus(0)}
                      style={{ fontSize: "1.1em" }}
                    >
                      Ditolak
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 bg-white p-3">
                {listPembayaran && listPembayaran.length > 0 ? (
                  (() => {
                    const filteredData = listPembayaran.filter((data) =>
                      selectedStatus !== null
                        ? data.status === selectedStatus
                        : true
                    );

                    if (filteredData.length > 0) {
                      return filteredData
                        .sort((a, b) => a.status - b.status)
                        .map((data, index) => (
                          <ComponentCardPembayaran key={index} data={data} />
                        ));
                    } else {
                      return (
                        <CompnentEmptyPembayaran
                          text="Tidak ada item"
                          img={imgEmptypay}
                        />
                      );
                    }
                  })()
                ) : (
                  <CompnentEmptyPembayaran
                    text="Tidak ada item"
                    img={imgEmptypay}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
