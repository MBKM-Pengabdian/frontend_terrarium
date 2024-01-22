import img_about1 from "./../../../../assets/img/about-1.jpg";
import img_about2 from "./../../../../assets/img/about-2.jpg";
import img_banner1 from "./../../../../assets/img/banner-1.jpg";

export const AboutPage = () => {
  return (
    <>
      <div
        className="container-fluid py-5 mb-5"
        style={{
          background:
            'url("https://cdn.discordapp.com/attachments/1174741902415900742/1192021363226066995/Group_1_1.png?ex=65a78f67&is=65951a67&hm=9c775bc530131c19b9b3f664dd2d51330c4d99b6a77c9e046c1467f00dbd1faf&")',
        }}
      >
        <div className="container py-5">
          <div className="text-white h1 text-center">About Us</div>
          <div className="text-white mb-3 h4 text-center">Cacti Life</div>
        </div>
      </div>
      <div className="about-section-home my-5 d-flex align-items-lg-center py-5">
        <div className="container z-index-1">
          <div className="row">
            <span className="text-dark fw-bold fs-5">Cacti Life</span>
            <div className="text-primary h2 mb-4">Sejarah Perusahaan</div>
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
          {/* <span className="text-light fw-bold fs-5">ABOUT US</span>
          <div className="text-primary h2 mb-4">Welcome to Cacti Life</div> */}
          <div className="row justify-content-around">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <div className="h3 fs-4 mb-2 text-primary">Visi</div>
                  <p className="text-light fs-6">
                    Mengembangkan usaha yang berbasis ekonomi kreatif.
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="h3 fs-4 mb-2 text-primary">Misi</div>
                  <p className="text-light fs-6">
                    Memperkenalkan terrarium kepada masyarakat Kota Medan dan
                    sekitarnya, membentuk komunitas penggemar seni terrarium,
                    memberikan layanan edukasi kepada generasi milenial di Kota
                    Medan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="col-lg-12 mb-5">
                <div className="h3 fs-4 mb-2 text-primary">Tujuan</div>
                <p className="text-light fs-6">
                  Meraih keuntungan dari usaha berbasis ekonomi kreatif
                </p>
              </div>
              <div className="col-lg-12">
                <div className="h3 fs-4 mb-2 text-primary">Sasaran </div>
                <p className="text-light fs-6">
                  Memperluas pangsa pasar dalam pengembangan usaha berbasis
                  ekonomi kreatif khususnya pada bidang seni terrarium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container"></div>
    </>
  );
};
