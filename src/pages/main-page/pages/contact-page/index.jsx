import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import img_banner1 from "./../../../../assets/img/banner-1.jpg";

export const ContactPage = () => {
  return (
    <>
      <BannerSection />
      <ContactSection />
    </>
  );
};

export const BannerSection = () => {
  return (
    <>
      <div
        className="container-fluid mb-5 py-5"
        style={{
          background: `url(${img_banner1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5">
          <div className="text-white h1 text-center">Contact Us</div>
          <div className="text-white mb-3 h4 text-center">Cacti Life</div>
        </div>
      </div>
    </>
  );
};

export const ContactSection = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" style={{ miHeight: "450px" }}>
              <iframe
                className="w-100 mb-n2"
                style={{ height: "100%" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9997874062087!2d98.68817087472395!3d3.5875226503020445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131b05672220d%3A0xba277a5eddb19abe!2sUniversitas%20Mikroskil%2C%20Kampus%20B!5e0!3m2!1sid!2sid!4v1705914659171!5m2!1sid!2sid"
                allowfullscreen=""
                aria-hidden="false"
              ></iframe>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="border-start border-5 border-primary ps-4 mb-5">
                    <h6 className="text-body text-uppercase mb-2">
                      Contact Us
                    </h6>
                    <div className="h3 mb-0">
                      Jika Anda Memiliki Pertanyaan, Silakan Hubungi Kami
                    </div>
                  </div>

                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="name"
                            className="form-control border-0 bg-light"
                            placeholder="Your Name"
                            required
                          />
                          <label htmlFor="name">Nama Anda</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            name="email"
                            className="form-control border-0 bg-light"
                            placeholder="Your Email"
                            required
                          />
                          <label htmlFor="email">Email Anda</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="subject"
                            className="form-control border-0 bg-light"
                            placeholder="Subject"
                            required
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            name="message"
                            className="form-control border-0 bg-light"
                            placeholder="Leave a message here"
                            style={{ height: "90px" }}
                            required
                          ></textarea>
                          <label htmlFor="message">Pesan</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-success py-3 px-5 fw-bold"
                          type="submit"
                        >
                          Kirim Pesan
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="card-footer bg-primary mt-5">
                  <div className="row py-2">
                    <div className="col-lg-4 col-sm-4">
                      <div className="icon-contact mb-3 text-center">
                        <FaPhone className="fs-3 text-light" />
                      </div>
                      <div className="icon-text text-light text-center fw-bold">
                        0882388236
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="icon-contact mb-3 text-center">
                        <FaEnvelope className="fs-3 text-light" />
                      </div>
                      <div className="icon-text text-light text-center fw-bold">
                        cacti@example.com
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="icon-contact mb-3 text-center">
                        <FaLocationDot className="fs-3 text-light" />
                      </div>
                      <div className="icon-text text-light text-center text-2line fw-bold">
                        Jl. M.H Thamrin No.140, Pusat Ps., Kec. Medan Kota, Kota Medan, Sumatera Utara 20212
                      </div>
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
