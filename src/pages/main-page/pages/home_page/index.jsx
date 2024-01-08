import { FaCartPlus, FaTree } from "react-icons/fa";

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
            <div className="carousel-caption position-absolute vh-100 d-flex align-items-center justify-content-center text-center pt-5">
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

      <div className="layanan-section-home my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-5 ">
              <div className="icon-layanan mb-4 text-center text-primary display-4">
              <FaTree/>
              </div>
              <div className="h5 text-center mb-4">Renovasi taman</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                sint architecto dolores. Voluptatibus, facere doloribus!
              </p>
            </div>
            <div className="col-md-3 p-5 ">
              <div className="icon-layanan mb-4 text-center text-primary display-4">
              <FaTree/>
              </div>
              <div className="h5 text-center mb-4">konsultasi dan desain taman</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                sint architecto dolores. Voluptatibus, facere doloribus!
              </p>
            </div>
            <div className="col-md-3 p-5 ">
              <div className="icon-layanan mb-4 text-center text-primary display-4">
              <FaTree/>
              </div>
              <div className="h5 text-center mb-4">konsultasi perawatan tanaman Proyek</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                sint architecto dolores. Voluptatibus, facere doloribus!
              </p>
            </div>
            <div className="col-md-3 p-5 ">
              <div className="icon-layanan mb-4 text-center text-primary display-4">
              <FaTree/>
              </div>
              <div className="h5 text-center mb-4">Program Khusus</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                sint architecto dolores. Voluptatibus, facere doloribus!
              </p>
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

      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea nam
        consectetur magni quos eaque eum ad earum voluptates aspernatur suscipit
        quis corrupti libero qui, eligendi laborum veritatis cumque quas rerum!
        Quis eos itaque debitis non dolor tenetur impedit repudiandae harum
        consectetur voluptatibus? Obcaecati ratione expedita voluptatibus
        nesciunt velit ipsum quas amet. Ipsam tempore perspiciatis temporibus
        eligendi tempora illo dolores officia, odio facere, quis reiciendis ad!
        Corrupti optio nostrum consectetur numquam cupiditate eligendi. Ipsum
        reiciendis sapiente harum, placeat non quia recusandae eaque, autem
        pariatur ipsam expedita fuga provident molestias perferendis dicta!
        Eaque at sapiente veniam obcaecati voluptatem, voluptas architecto est
        totam nemo beatae tempore ea debitis nostrum? Sit delectus maxime
        consequatur fugit, consectetur nam, dolore consequuntur eligendi
        adipisci ratione repellendus vero eius expedita quod quis aperiam saepe
        veritatis quos distinctio fuga. Nemo provident, enim suscipit asperiores
        temporibus nihil illo molestiae atque error harum officia eos libero
        accusantium fugiat quis quas veritatis laudantium cum iusto
        necessitatibus. Fugiat repudiandae dolores voluptatibus eaque quidem
        nobis aliquid rem beatae, voluptatem fugit est sed soluta vel porro
        quaerat? Dolorum quia vel dolores sunt. Quasi ullam quam assumenda
        fugiat odit iste fuga officia eaque. Hic aliquam molestias ex rerum
        reiciendis quis asperiores vel sequi accusantium. Laborum atque porro
        quia distinctio similique, necessitatibus rerum ab eos maxime velit
        dolore aspernatur minima voluptas exercitationem! Ut ipsa necessitatibus
        praesentium laudantium maxime commodi velit enim at quae facere
        repellendus veritatis animi earum modi debitis cum minus, sunt suscipit
        cumque quos distinctio, quibusdam facilis. Repellendus illum iure, culpa
        quia corrupti a nostrum excepturi, cumque error inventore, tenetur
        aperiam. Odit ut quos saepe officia? Quae illo, repellat vero incidunt
        exercitationem vel molestiae, soluta nulla voluptatibus veniam suscipit
        voluptates aliquam earum. Ipsum odio neque maxime quis ipsa dolorum
        possimus et accusantium illum? Velit libero esse aliquid dolore, placeat
        id? Blanditiis ad quidem fugit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Soluta, enim ullam eos tempore rerum eum sit
        praesentium ab dolor corrupti quia explicabo ipsum sint, aut alias ipsam
        expedita assumenda voluptas? Repudiandae ex dicta explicabo voluptatem
        velit facilis voluptates quaerat officia sint, minus autem corrupti amet
        doloremque architecto. Aspernatur sint optio voluptatum quia ullam
        commodi beatae accusantium dicta suscipit magnam corrupti consequuntur
        possimus pariatur tempora iure minima expedita harum, quod soluta error
        velit sit unde, mollitia perferendis. Nam laudantium non natus dolores.
        Illo eius quisquam consequatur et ipsam reprehenderit, incidunt
        repudiandae eaque ratione accusantium, ex laudantium quasi facere.
        Temporibus, facilis? Excepturi eveniet nostrum sunt dolore, perferendis
        a? Expedita veritatis doloremque facere labore eum laboriosam rerum
        repellendus eos qui voluptates ratione temporibus, nulla consectetur
        reprehenderit nobis illo quas aperiam. Maiores possimus minima iure
        soluta in atque repudiandae? Dolorum, iste voluptas at corporis
        molestiae culpa a dolor cumque deserunt consequatur rerum expedita, ipsa
        eius magnam esse itaque id natus, maiores odit. Eveniet illo perferendis
        ipsam nostrum quod delectus maiores recusandae quos. Quis earum
        recusandae odio ducimus ab placeat vel commodi modi aut, dolorem
        doloremque in? Quis quaerat eius itaque voluptatibus optio. Cum
        reiciendis alias quia repellendus expedita. Accusamus eligendi
        voluptates rem! Nam, fugiat. Vero molestiae nisi odio, maxime numquam
        similique eius enim voluptatum minima, et placeat? Soluta quisquam modi
        quae consequatur dolorem perspiciatis officia est ullam debitis
        explicabo? Maxime aliquid sapiente nesciunt sequi eveniet nobis
        provident facilis sed? Molestias nemo fugit earum nobis minima sunt
        deleniti debitis architecto voluptatibus unde quos ad labore rerum
        consectetur reprehenderit itaque nesciunt explicabo hic animi a quod,
        temporibus reiciendis aspernatur. Neque sapiente quae molestiae quisquam
        voluptatem natus non corrupti error nesciunt reprehenderit itaque, ipsa
        libero magnam ducimus ratione ipsum minus doloremque esse ipsam numquam
        illo veritatis. Soluta ipsum minus officiis accusamus ipsam ex sit
        voluptatum suscipit corrupti!
        <div className="product-section-home my-5">
          <div className="row mb-3">
            <div className="col">
              <div className="h4">Produk Kami</div>
            </div>
            <div className="col text-end">Selengkapnya</div>
          </div>
          <div className="row justify-content-between">
            <div
              className="card px-0 mx-lg-3 rounded-3"
              style={{ width: "25rem" }}
            >
              <img
                src="https://images.unsplash.com/photo-1635819335758-304866e30d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
                className="card-img-top rounded-top"
                style={{ height: "300px", objectFit: "cover" }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-2line mb-3"
                  style={{ minHeight: "50px" }}
                >
                  Pot Bentuk Rumah
                </h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dicta quae voluptatem eius molestias sequi quod numquam, earum
                  molestiae nihil.
                </p>

                <div className="text-end">
                  <button className="btn btn-success">
                    <FaCartPlus className="fs-5" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card px-0 mx-lg-3 rounded-3"
              style={{ width: "25rem" }}
            >
              <img
                src="https://images.unsplash.com/photo-1635819335758-304866e30d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
                className="card-img-top rounded-top"
                style={{ height: "300px", objectFit: "cover" }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-2line mb-3"
                  style={{ minHeight: "50px" }}
                >
                  Pupuk Organik Serbuk Emas
                </h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dicta quae voluptatem eius molestias sequi quod numquam, earum
                  molestiae nihil.
                </p>

                <div className="text-end">
                  <button className="btn btn-success">
                    <FaCartPlus className="fs-5" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card px-0 mx-lg-3 rounded-3"
              style={{ width: "25rem" }}
            >
              <img
                src="https://images.unsplash.com/photo-1635819335758-304866e30d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
                className="card-img-top rounded-top"
                style={{ height: "300px", objectFit: "cover" }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-2line mb-3"
                  style={{ minHeight: "50px" }}
                >
                  Tanaman Hias Monstera Variegata Variegata
                </h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  dicta quae voluptatem eius molestias sequi quod numquam, earum
                  molestiae nihil.
                </p>

                <div className="text-end">
                  <button className="btn btn-success">
                    <FaCartPlus className="fs-5" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-section-home my-5">
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
                          <div className="card-title h5">
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

            {/* <div
              className="card px-0 mx-3 rounded-3"
              style={{ width: "18rem" }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1174741902415900742/1174741995751755776/event1.jpg?ex=65a94c3d&is=6596d73d&hm=c1553472ced677decf48a3f1fde03d47f2fcc1b868e0241fd334c128d3c0455a&"
                className="card-img-top rounded-top"
                style={{ height: "320px", objectFit: "cover" }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-3line mb-4"
                  style={{ minHeight: "75px" }}
                >
                  Workshop Tanaman Hidroponik
                </h5>

                <label className="text-end">2023-12-21</label>
              </div>
            </div>
            <div
              className="card px-0 mx-3 rounded-3"
              style={{ width: "18rem" }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1174741902415900742/1174741995453952050/event6.jpg?ex=65a94c3d&is=6596d73d&hm=1abad8839d80f9d454637eba5e6ead3459e651a54f035751e255e43414854e56&"
                className="card-img-top rounded-top"
                style={{ height: "320px", objectFit: "cover" }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-3line mb-4"
                  style={{ minHeight: "75px" }}
                >
                  Festival Pohon Rindang
                </h5>

                <label className="text-end">2023-12-21</label>
              </div>
            </div>
            <div
              className="card px-0 mx-3 rounded-3"
              style={{ width: "18rem" }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1174741902415900742/1174741996049534976/event2.jpg?ex=65a94c3d&is=6596d73d&hm=2fd2372b28476fc27aa65759378033c25190d883c9a7332d6aa3a1e0ffab912a&"
                className="card-img-top rounded-top"
                style={{ height: "320px", objectFit: "cover" }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-3line mb-4"
                  style={{ minHeight: "75px" }}
                >
                  Kelas Perawatan Tanaman Hias Tanaman Hias Tanaman Hias Tanaman
                  Hias
                </h5>

                <label className="text-end">2023-12-21</label>
              </div>
            </div>
            <div
              className="card px-0 mx-3 rounded-3"
              style={{ width: "18rem" }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1174741902415900742/1191807387003261019/image.png?ex=65a6c81f&is=6594531f&hm=30644f92bb2a186059e110824657f3e13ca12c7d627158fd618a1e873d4adfeb&"
                className="card-img-top rounded-top"
                style={{ height: "320px", objectFit: "cover" }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-3line mb-4"
                  style={{ minHeight: "75px" }}
                >
                  Pameran Bunga Exotic
                </h5>
                <label className="text-end">2023-12-21</label>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
