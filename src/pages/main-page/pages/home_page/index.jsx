import {
  FaBitbucket,
  FaCartPlus,
  FaHandHoldingWater,
  FaSeedling,
  FaSpa,
  FaTree,
} from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide mb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.discordapp.com/attachments/1174741902415900742/1192019147979247647/image.png?ex=65a78d57&is=65951857&hm=dbce737ffdcefb360291bee786d369fe38ef976f07868b61eafb7e3e7f8bf973&"
              className="d-block vh-50"
              style={{
                width: "100%",
                height: "90vh",
                objectFit: "cover",
                filter: "brightness(50%)",
              }}
              alt="..."
            />
            <div className="carousel-caption vh-100 d-flex align-items-center justify-content-center text-center pt-5">
              <div className="">
                <div className="h3 text-primary">Terrarium Medan</div>
                <div className="text-light display-2 fw-bold">
                  Make Your Home Like Garden
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.discordapp.com/attachments/1174741902415900742/1192019147979247647/image.png?ex=65a78d57&is=65951857&hm=dbce737ffdcefb360291bee786d369fe38ef976f07868b61eafb7e3e7f8bf973&"
              className="d-block vh-50"
              style={{
                width: "100%",
                height: "90vh",
                objectFit: "cover",
                filter: "brightness(50%)",
              }}
              alt="..."
            />
            <div className="carousel-caption position-absolute vh-100 d-flex align-items-center justify-content-center text-center pt-5">
              <div className="">
                <div className="h3 text-primary">Terrarium Medan</div>
                <div className="text-light display-2 fw-bold">
                  Be Productive, Not Busy.
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.discordapp.com/attachments/1174741902415900742/1192019147979247647/image.png?ex=65a78d57&is=65951857&hm=dbce737ffdcefb360291bee786d369fe38ef976f07868b61eafb7e3e7f8bf973&"
              className="d-block vh-50"
              style={{
                width: "100%",
                height: "90vh",
                objectFit: "cover",
                filter: "brightness(50%)",
              }}
              alt="..."
            />
            <div className="carousel-caption position-absolute vh-100 d-flex align-items-center justify-content-center text-center pt-5">
              <div className="">
                <div className="h3 text-primary">Terrarium Medan</div>
                <div className="text-light display-2 fw-bold">
                  Be Productive, Not Busy.
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className="layanan-section-home position-absolute"
        style={{ marginTop: "-120px", marginBottom: "400px", zIndex: "1" }}
      >
        <div className="container-fluid top-feature py-5 pt-lg-0">
          <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div
                  className="bg-white shadow d-flex align-items-center h-100 px-5"
                  style={{ minHeight: "160px" }}
                >
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square">
                      <FaTree className="text-primary display-5" />
                    </div>
                    <div className="ps-3">
                      <h4>Renovasi Taman</h4>
                      <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div
                  className="bg-white shadow d-flex align-items-center h-100 px-5"
                  style={{
                    minHeight: "160px",
                  }}
                >
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square">
                      <FaTree className="text-primary display-5" />
                    </div>
                    <div className="ps-3">
                      <h4>Konsultasi dan Desain Taman</h4>
                      <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div
                  className="bg-white shadow d-flex align-items-center h-100 px-5"
                  style={{
                    minHeight: "160px",
                  }}
                >
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square">
                      <FaTree className="text-primary display-5" />
                    </div>
                    <div className="ps-3">
                      <h4>Konsultasi Perawatan Tanaman</h4>
                      <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="layanan-section-home  my-5 d-flex align-items-lg-center"
        style={{ paddingTop: "100px" }}
      >
        <div className="container-fluid py-5 pt-lg-0">
          <div className="container py-5 pt-lg-0 d-flex justify-content-center">
            <div className="row px-lg-5">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-auto pt-5 d-flex justify-content-center px-0 mx-4">
                    <div className="px-0">
                      <div
                        className="card px-0 mb-5 rounded-3"
                        style={{ width: "15rem" }}
                      >
                        <div
                          className="bg-dark d-flex align-items-center justify-content-center rounded-top"
                          style={{ height: "130px" }}
                        >
                          <FaSeedling className="display-4 text-primary" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title h5">Tanaman</h5>
                          <p
                            className="card-text"
                            style={{ fontSize: "0.85em" }}
                          >
                            Some quick example text to build on the card title
                            and make up the bulk
                          </p>
                        </div>
                      </div>
                      <div
                        className="card px-0 rounded-3"
                        style={{ width: "15rem" }}
                      >
                        <div
                          className="bg-dark d-flex align-items-center justify-content-center rounded-top"
                          style={{ height: "130px" }}
                        >
                          <FaBitbucket className="display-4 text-primary" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title h5">Aksesoris Terrarium</h5>
                          <p
                            className="card-text"
                            style={{ fontSize: "0.85em" }}
                          >
                            Some quick example text to build on the card title
                            and make up the bulk
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto d-flex justify-content-center">
                    <div className="">
                      <div
                        className="card px-0 mb-5 rounded-3"
                        style={{ width: "15rem" }}
                      >
                        <div
                          className="bg-dark d-flex align-items-center justify-content-center rounded-top"
                          style={{ height: "130px" }}
                        >
                          <FaHandHoldingWater className="display-4 text-primary " />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title h5">Media Tanam</h5>
                          <p
                            className="card-text"
                            style={{ fontSize: "0.85em" }}
                          >
                            Some quick example text to build on the card title
                            and make up the bulk
                          </p>
                        </div>
                      </div>
                      <div
                        className="card px-0 rounded-3"
                        style={{ width: "15rem" }}
                      >
                        <div
                          className="bg-dark d-flex align-items-center justify-content-center rounded-top"
                          style={{ height: "130px" }}
                        >
                          <FaSpa className="display-4 text-primary" />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title h5">
                            Produk Jadi Terrarium
                          </h5>
                          <p
                            className="card-text"
                            style={{ fontSize: "0.85em" }}
                          >
                            Some quick example text to build on the card title
                            and make up the bulk
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 m-auto">
                <div className="text-primary h3 mb-4">
                  Produk yang Kami Tawarkan
                </div>
                <p>
                  Dalam perjalanan kami menuju keberlanjutan dan kecantikan
                  alam, kami dengan bangga mempersembahkan rangkaian produk
                  unggulan kami yang mencerminkan keajaiban dunia tumbuhan.
                  Setiap produk yang kami tawarkan tidak hanya sekadar barang,
                  tetapi juga kisah cinta kami terhadap tanaman dan
                  keberlanjutan.
                </p>
                <p>
                  Kami memahami bahwa setiap tanaman memiliki cerita dan
                  karakternya sendiri, dan itulah yang kami sajikan melalui
                  produk-produk kami. Dari tanaman hidup yang segar hingga
                  aksesoris terrarium yang elegan, kami berkomitmen untuk
                  membawa keindahan hijau ke dalam kehidupan sehari-hari Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="about-section-home my-5 d-flex align-items-lg-center py-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnRzfGVufDB8fDB8fHww')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <div
          className="position-absolute top-0 start-0 end-0 bottom-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: "0",
          }}
        ></div>
        <div className="container z-index-1">
          <div className="row">
            <div className="col-md-6 m-auto">
              <span className="text-light fw-bold fs-5">ABOUT US</span>
              <div className="text-primary h2 mb-4">Welcome to Cacti Life</div>
              <p className="text-light mb-5">
                Cacti Life adalah perusahaan yang berdiri pada tanggal 26 Maret
                2018 yang berfokus pada pengembangan usaha berbasis ekonomi
                kreatif. Perusahaan ini berkomitmen untuk memperkenalkan
                terrarium kepada masyarakat Kota Medan dan sekitarnya, membentuk
                komunitas penggemar seni terrarium, memberikan layanan edukasi
                kepada generasi milenial di Kota Medan, dan meraih keuntungan
                dari usaha berbasis ekonomi kreatif.
              </p>
              <div className="" style={{ borderLeft: "5px #80CC28 solid" }}>
                <div className="row ms-3">
                  <div className="col-auto display-4 fw-bold text-primary">
                    6
                  </div>
                  <div className="col m-auto">
                    <div className="row">
                      <div className="col-12 fs-5">Years of</div>
                      <div className="col-12 text-light fw-bold fs-5">
                        EXPERIENCE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row justify-content-end">
                <div className="col-md-6 mb-4" style={{ width: "15rem" }}>
                  <div
                    className="card text-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <div className="card-body">
                      <div className="text-primary display-5 fw-bold mb-2">
                        120
                      </div>
                      <div className="fw-bold h5 text-light">Projects Done</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" style={{ width: "15rem" }}>
                  <div
                    className="card text-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <div className="card-body">
                      <div className="text-primary display-5 fw-bold mb-2">
                        45
                      </div>
                      <div className="fw-bold h5 text-light">Projects Done</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" style={{ width: "15rem" }}>
                  <div
                    className="card text-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <div className="card-body">
                      <div className="text-primary display-5 fw-bold mb-2">
                        13
                      </div>
                      <div className="fw-bold h5 text-light">Projects Done</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4" style={{ width: "15rem" }}>
                  <div
                    className="card text-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <div className="card-body">
                      <div className="text-primary display-5 fw-bold mb-2">
                        87
                      </div>
                      <div className="fw-bold h5 text-light">Projects Done</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section-home my-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col">
              <div className="h4">Produk Kami</div>
            </div>
            <div className="col text-end">Selengkapnya</div>
          </div>
          <div className="row justify-content-between">
            {["a", "b", "c", "d"].map((data, index) => (
              <div
                key={index}
                className="card px-0 mx-lg-3 rounded-3"
                style={{ width: "18rem" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1635819335758-304866e30d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
                  className="card-img-top rounded-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt="..."
                />
                <div className="card-body pt-1">
                  <label htmlFor="">Kategori</label>
                  <h5
                    className="card-title fs-6 text-2line"
                    style={{ minHeight: "50px" }}
                  >
                    Pot Bentuk Rumah Makan Adat Padang
                  </h5>
                  <div className="fw-bold">Rp. 40.000</div>

                  <div className="text-end">
                    <button className="btn btn-sm btn-success">
                      <FaCartPlus className="fs-5" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="event-section-home my-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col">
              <div className="h4">Event Terbaru</div>
            </div>
            <div className="col text-end">Selengkapnya</div>
          </div>

          <div className="row justify-content-between mb-5">
            <div className="col-md-6">
              <div className="card rounded-3" style={{ height: "100%" }}>
                <img
                  src="https://cdn.discordapp.com/attachments/1174741902415900742/1174741995751755776/event1.jpg?ex=65a94c3d&is=6596d73d&hm=c1553472ced677decf48a3f1fde03d47f2fcc1b868e0241fd334c128d3c0455a&"
                  className="card-img-top rounded-top"
                  style={{ height: "340px", objectFit: "cover" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Kelas Perawatan Tanaman Hias</h5>
                  <p className="text-2line">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa voluptatum exercitationem quas expedita placeat
                    delectus officia esse, error voluptate odio nesciunt
                    officiis voluptatem doloribus repellat deserunt recusandae,
                    beatae aspernatur dolorum.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">2024-03-12</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                {[1, 2, 3].map((data, index, array) => (
                  <>
                    <div key={index} className="col-md-12">
                      <div className="row g-0">
                        <div className="col-md-4" style={{ height: "135px" }}>
                          <img
                            src="https://cdn.discordapp.com/attachments/1174741902415900742/1174741995751755776/event1.jpg?ex=65a94c3d&is=6596d73d&hm=c1553472ced677decf48a3f1fde03d47f2fcc1b868e0241fd334c128d3c0455a&"
                            className="img-fluid rounded-start"
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8 ps-4">
                          <div className="card-title h5 text-primary fw-bold">
                            Workshop Tanaman Hidroponik
                          </div>
                          <p className="text-2line">
                            lorem Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Ipsa voluptatum exercitationem
                            quas expedita placeat delectus officia esse, error
                            voluptate odio nesciunt officiis voluptatem
                            doloribus repellat deserunt recusandae, beatae
                            aspernatur dolorum. lorem
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              2024-01-23
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                    {index !== array.length - 1 && (
                      <div className="px-3 my-4">
                        <div className="border-bottom w-100"></div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
