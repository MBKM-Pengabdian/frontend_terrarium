import { Link } from "react-router-dom";

export const SidebarPesanan = () => {
  return (
    <>
      <div className="list-group rounded-0 bg-white">
        <Link
          to="/purchase/pembayaran-saya"
          className="list-group-item list-group-item-action py-3 fw-bold"
          aria-current="true"
        >
          <div className="d-flex justify-content-between">
            Pembayaran
            <span className="badge text-bg-danger rounded-pill">1</span>
          </div>
        </Link>
        <Link
          to="/purchase/event-saya"
          className="list-group-item list-group-item-action py-3 fw-bold"
        >
          <div className="d-flex justify-content-between">
            Event
            <span className="badge text-bg-danger rounded-pill">5</span>
          </div>
        </Link>
        <Link
          to="/purchase/produk-saya"
          className="list-group-item list-group-item-action py-3 fw-bold"
        >
          <div className="d-flex justify-content-between">
            Produk
            <span className="badge text-bg-danger rounded-pill">1</span>
          </div>
        </Link>
        <Link
          to="/purchase/request-saya"
          className="list-group-item list-group-item-action py-3 fw-bold"
        >
          <div className="d-flex justify-content-between">
            Riwayat Layananan Spesial Saya
            <span className="badge text-bg-danger rounded-pill">3</span>
          </div>
        </Link>
      </div>
    </>
  );
};
