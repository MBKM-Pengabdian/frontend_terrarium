/* eslint-disable react/prop-types */
import { useState } from "react";
import { formatRupiah } from "../../../../../../../utils/GlobalFunction";

export const ComponentCardPembayaran = ({ data }) => {
  const [fotoBukti, setFotoBukti] = useState(null);
  const getStatusClassName = (status) => {
    switch (status) {
      case 1:
        return "text-info";
      case 2:
        return "text-warning";
      case 3:
        return "text-success";
      case 0:
        return "text-danger";
      default:
        return "";
    }
  };
  const getStatusName = (status) => {
    switch (status) {
      case 1:
        return "Menunggu";
      case 2:
        return "Diproses";
      case 3:
        return "Disetujui";
      case 0:
        return "Ditolak";
      default:
        return "";
    }
  };
  return (
    <>
      <div className="row mb-4">
        <div className="col-12 mb-2 d-flex justify-content-between">
          <div className="fw-bold" style={{ fontSize: "1.2em" }}>
            {data.tipe}
          </div>
          <div className="text-end">
            {data.status === 0 && (
              <>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modaldDitolak"
                  className="text-danger me-3"
                >
                  <u>Alasan</u>
                </a>
                <span>|</span>
              </>
            )}
            <span className={`badge ${getStatusClassName(data.status)}`}>
              {getStatusName(data.status)}
            </span>
          </div>
        </div>
        <div className="col-5 col-lg-2 col-md-3 col-sm-3">
          <img
            src=""
            className="img-fluid me-3"
            style={{
              height: "90px",
              width: "90px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="col-7 col-lg-10 col-md-6 col-sm-6 mb-4">
          <div className="row g-3">
            <div className="col-lg-4">
              <div className="mb-2">{data.judul}</div>
              <div className="">{formatRupiah(data.price)}</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <hr />
        </div>
        {data.status === 3 ? (
          <div className="col-12 d-flex justify-content-between p-2">
            <div className="">
              <button className="btn btn-primary">Pembayaran Disetujui</button>
            </div>
            <div className="fs-5">
              Total :{" "}
              <span
                className="text-dark fw-bold"
                style={{ fontSize: "0.95em" }}
              >
                {formatRupiah(data.price)}
              </span>
            </div>
          </div>
        ) : data.status === 2 ? (
          <>
            <div className="col-12 d-flex justify-content-between p-2">
              <div className="">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#modalUpload"
                >
                  Upload Ulang Bukti Bayar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalBayar"
                >
                  Bayar
                </button>
              </div>
              <div className="fs-5">
                Total :{" "}
                <span
                  className="text-dark fw-bold"
                  style={{ fontSize: "0.95em" }}
                >
                  {formatRupiah(data.price)}
                </span>
              </div>
            </div>
          </>
        ) : data.status === 1 ? (
          <>
            <div className="col-12 d-flex justify-content-between p-2">
              <div className="">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#modalUpload"
                >
                  Upload Bukti Bayar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalBayar"
                >
                  Bayar
                </button>
              </div>
              <div className="fs-5">
                Total :{" "}
                <span
                  className="text-dark fw-bold"
                  style={{ fontSize: "0.95em" }}
                >
                  {formatRupiah(data.price)}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-12 d-flex justify-content-between p-2">
              <div className="">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#modalUpload"
                >
                  Upload Ulang Bukti Bayar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalBayar"
                >
                  Bayar
                </button>
              </div>
              <div className="fs-5">
                Total :{" "}
                <span
                  className="text-dark fw-bold"
                  style={{ fontSize: "0.95em" }}
                >
                  {formatRupiah(data.price)}
                </span>
              </div>
            </div>
          </>
        )}

        <div className="col-12">
          <hr />
        </div>
      </div>

      {/* ALERT BUKTI */}
      <div
        className="modal fade modal-md"
        id="modalUpload"
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
                    Bukti Pembayaran
                  </div>
                </div>
                <div className="col text-end">
                  <div className="fw-bold text-dark fs-5 p-3 rounded-top">
                    <button type="button" data-bs-dismiss="modal" className="btn btn-danger">Kembali</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="img p-2 pt-0">
              <img
                src={fotoBukti}
                alt=""
                className="img-fluid mb-3"
                style={{ width: "100%" }}
              />
            </div>
            <div className="mb-3 p-4 pt-1">
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
              <div className="mt-4">
                <button className="btn btn-primary">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALERT DITOLAK */}
      <div
        className="modal fade modal-md"
        id="modaldDitolak"
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
                    Alasan Penolakan
                  </div>
                </div>
                <div className="col text-end">
                  <div className="fw-bold text-dark fs-5 p-3 rounded-top">
                    <button type="button" data-bs-dismiss="modal" className="btn btn-danger">Kembali</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 ">
              <div className="h5">Foto Kurang Jelas</div>
              <p>
                Maaf, kami tidak dapat memproses pembayaran Anda saat ini karena terdapat ketidaksesuaian dalam informasi yang diberikan.
                Silahkan lakukan pembayaran dan jika sudah upload bukti pembayaran kembali. Terima kasih
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ALERT bAYAR */}
      <div
        className="modal fade modal-xl"
        id="modalBayar"
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
                    Lakukan Pembayaran
                  </div>
                </div>
                <div className="col text-end">
                  <div className="fw-bold text-dark fs-5 p-3 rounded-top">
                    <button type="button" data-bs-dismiss="modal" className="btn btn-danger">Kembali</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3 p-4">
              <div className="row">
                <div className="col-lg-5">
                  <button className="btn btn-lg fw-bold text-dark border border-3 w-100 mb-2">
                    QRIS
                  </button>
                  <button className="btn btn-lg fw-bold text-dark border border-3 w-100 mb-2">
                    BCA
                  </button>
                  <button className="btn btn-lg fw-bold text-dark border border-3 w-100 mb-2">
                    Mandiri
                  </button>
                  <button className="btn btn-lg fw-bold text-dark border border-3 w-100 mb-2">
                    OVO
                  </button>
                </div>
                <div className="col text-center">
                  <p className="text-dark">
                    Silahkan lakukan pembayaran dari metode yang anda pilih
                  </p>

                  <img
                    src="https://cms.dailysocial.id/wp-content/uploads/2023/03/QRIS.png"
                    alt=""
                    className="img-fluid mb-3"
                    style={{ width: "" }}
                  />
                  <div className="fs-6 mb-3">
                    No: <span className="fw-bold">8645316840</span>
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
