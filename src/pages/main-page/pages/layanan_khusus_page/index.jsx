import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const LayananKhususPage = () => {
  const listlayanan = [
    { id: "1", namaLayaman: "Renovasi taman" },
    { id: "2", namaLayaman: "Pembuatan proyek taman" },
    { id: "3", namaLayaman: "Desain interior berbasis tanaman" },
    { id: "4", namaLayaman: "Konsultasi" },
    { id: "5", namaLayaman: "Layanan lainnya (spesifikasikan)" },
  ];
  const [capVal, setCapVal] = useState();
  const [isAgree, setIsAgree] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!isAgree || !capVal);
  }, [isAgree, capVal]);

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="card bg-white">
            <div className="card-body">
              <div className="fs-5 fw-bold text-dark">Form Layanan Khusus</div>
              <hr />
              <div className="mb-4"></div>
              <div className="row g-5">
                <div className="col-lg-4">
                  <div className="mb-0 fs-5 text-dark fw-bold">Data Diri</div>
                  <label className="text-muted mb-4">
                    Lengkapi Data Diri Anda
                  </label>
                  <div className="form-group">
                    <label className="mb-1 label-for-input">
                      Nama Lengkap <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="mb-1 label-for-input">
                          No Telp <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="mb-1 label-for-input">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="mb-1 label-for-input">
                        kota/tempat Tinggal
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1 label-for-input">
                        Alamat Rumah
                      </label>
                      <textarea
                        className="form-control"
                        style={{ height: "85px" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="mb-0 fs-5 text-dark fw-bold">
                    Kebutuhan/Pesan Khusus
                  </div>
                  <label className="text-muted mb-4">
                    Lengkapi Kebutuhan Anda
                  </label>
                  <div className="form-group">
                    <label className="mb-1 label-for-input">
                      Jenis Layanan yang Diminta
                      <span className="text-danger">*</span>
                    </label>
                    <select className="form-select mb-3">
                      {listlayanan.map((data, index) => (
                        <option value={data.id} key={index}>
                          {data.namaLayaman}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="mb-1 label-for-input">
                      Deskripsi Kebutuhan <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      style={{ height: "125px" }}
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-group">
                        <label className="mb-1 label-for-input">
                          Tanggal yang Diinginkan
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label className="mb-1 label-for-input">
                          Budget Estimasi
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group">
                        <label className="mb-1 label-for-input">
                          Lokasi Proyek
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="mb-1 label-for-input">
                        Lampiran Foto
                      </label>
                      <input type="file" className="form-control" />
                      <div className="mt-2">
                        <input
                          className="form-check-input border border-2"
                          type="checkbox"
                          id="agree"
                          onChange={(e)=> setIsAgree(e.target.checked)}
                        />
                        <label className="text-muted mb-4" htmlFor="agree">
                          Setujui Syarat dan Ketentuan
                        </label>
                      </div>
                    </div>
                    <ReCAPTCHA
                      sitekey="6LeQBXcpAAAAALBTBIpN59SBTZXEiRXFswSSYbBt"
                      onChange={(val) => setCapVal(val)}
                    />
                    <div className="form-group text-end">
                      <button
                        className="btn btn-success w-25"
                        disabled={isButtonDisabled}
                      >
                        Kirim
                      </button>
                    </div>
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
