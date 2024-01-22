import {
  FaBitbucket,
  FaHandHoldingWater,
  FaSeedling,
  FaSpa,
} from "react-icons/fa";
import img_about1 from "./../../../../assets/img/about-1.jpg";
import img_about2 from "./../../../../assets/img/about-2.jpg";
import img_banner1 from "./../../../../assets/img/banner-1.jpg";
import img_forest from "./../../../../assets/img/forest.jpg";

export const AboutPage = () => {
  return (
    <>
      <BannerSection />
      <SejarahSection />
      <ServiceSection />
      <VisiSection />
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
          <div className="text-white h1 text-center">About Us</div>
          <div className="text-white mb-3 h4 text-center">Cacti Life</div>
        </div>
      </div>
    </>
  );
};

export const SejarahSection = () => {
  return (
    <>
      <div className="d-flex align-items-lg-center mb-5 py-2">
        <div className="container z-index-1">
          <span className="text-dark fw-bold fs-5">Cacti Life</span>
          <div className="text-primary h2">Sejarah Perusahaan</div>
          <div className="line-title mb-4"></div>
          <div className="row">
            <div className="row">
              <div className="col-lg-7 mb-3 m-auto">
                <p className="text-dark">
                  &emsp;&emsp;&emsp; CactiLife adalah usaha yang bergerak di
                  bidang usaha kreatif, khususnya pada bidang dekorasi dan
                  produk yang memanfaatkan tanaman serta bahan-bahan dari alam
                  untuk menghadirkan alam di rumah atau di perkantoran.
                </p>
                <p className="text-dark">
                  Dengan berbekal pengalaman dan kecintaan kami akan seni dan
                  alam Indonesia, maka CactiLife didirikan pada bulan Maret 2018
                  dengan nama usaha @terrarium.medan. Pada awal beroperasinya
                  usaha ini, kami bergerak untuk memperkenalkan terrarium bagi
                  masyarakat Kota Medan.
                </p>
              </div>
              <div className="col-lg-5">
                <img
                  src={img_about1}
                  style={{ width: "90%", height: "250px", objectFit: "cover" }}
                  alt="img-about-1"
                  className="img-fluid"
                />
              </div>

              <div className="col-lg-5 mt-5">
                <img
                  src={img_about2}
                  style={{ width: "90%", height: "250px", objectFit: "cover" }}
                  alt="img-about-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-7 mb-3 m-auto">
                <p className="text-dark">
                  Kami merupakan usaha kreatif yang tumbuh stabil seiring
                  jalannya waktu. Melalui kemampuan, pengalaman, serta tanggung
                  jawab untuk memberi edukasi kepada masyarakat khususnya
                  generasi muda yang tertarik dalam seni, kami tidak hanya
                  memperkenalkan terrarium, melainkan juga menumbuhkan
                  nilai-nilai seni dan bakat para generasi muda dalam bidang
                  usaha kreatif yang tetap mencintai kelestarian alam.
                </p>
                <p className="text-dark">
                  Kami memiliki keyakinan, dengan sumber daya manusia
                  berpengalaman dan bertanggung jawab, akan terus bertumbuh dan
                  berkembang serta tetap menjadi penyedia jasa sekaligus menjadi
                  partner bagi banyak perusahaan dan organisasi yang profesional
                  dan dapat dipercaya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const VisiSection = () => {
  return (
    <>
      <div
        className="d-flex align-items-lg-center mb-5"
        style={{
          backgroundImage: `url(${img_forest})`,
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
        <div className="container-fluid z-index-1 py-5">
          <div className="row justify-content-around py-4">
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <div className="h3 fs-4 mb-2 text-primary">Visi</div>
                  <p className="text-light fs-5">
                    Mengembangkan usaha yang berbasis ekonomi kreatif.
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="h3 fs-4 mb-2 text-primary">Misi</div>
                  <p className="text-light fs-5">
                    Memperkenalkan terrarium kepada masyarakat Kota Medan dan
                    sekitarnya, membentuk komunitas penggemar seni terrarium,
                    memberikan layanan edukasi kepada generasi milenial di Kota
                    Medan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="col-lg-12 mb-5">
                <div className="h3 fs-4 mb-2 text-primary">Tujuan</div>
                <p className="text-light fs-5">
                  Meraih keuntungan dari usaha berbasis ekonomi kreatif
                </p>
              </div>
              <div className="col-lg-12">
                <div className="h3 fs-4 mb-2 text-primary">Sasaran </div>
                <p className="text-light fs-5">
                  Memperluas pangsa pasar dalam pengembangan usaha berbasis
                  ekonomi kreatif khususnya pada bidang seni terrarium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ServiceSection = () => {
  const dataLayanan = [
    {
      icon: <FaSeedling className="display-4 text-primary " />,
      title: "Tanaman",
      subtitle:
        "Some quick example text to build on the card title and make up the bulk",
    },
    {
      icon: <FaBitbucket className="display-4 text-primary " />,
      title: "Aksesoris Terrarium",
      subtitle:
        "Some quick example text to build on the card title and make up the bulk",
    },
    {
      icon: <FaHandHoldingWater className="display-4 text-primary " />,
      title: "Media Tanam",
      subtitle:
        "Some quick example text to build on the card title and make up the bulk",
    },
    {
      icon: <FaSpa className="display-4 text-primary " />,
      title: "Produk Jadi Terrarium",
      subtitle:
        "Some quick example text to build on the card title and make up the bulk",
    },
  ];
  return (
    <>
      <div className="d-flex align-items-lg-center mb-5 py-2">
        <div className="container z-index-1">
          <div className="text-primary h2 text-center">Layanan Kami</div>
          <div className="line-title m-auto mb-2"></div>
          <p className="text-center mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, quo?
          </p>
          <div className="row justify-content-center">
            {dataLayanan.map((data, index) => (
              <div
                key={index}
                className="card px-0 mx-3 mb-5 rounded-3"
                style={{ width: "15rem" }}
              >
                <div
                  className="bg-dark d-flex align-items-center justify-content-center rounded-top"
                  style={{ height: "130px" }}
                >
                  {data.icon}
                </div>
                <div className="card-body">
                  <h5 className="card-title h5">{data.title}</h5>
                  <p className="card-text" style={{ fontSize: "0.85em" }}>
                    {data.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
