import { SidebarPesanan } from "./components/sidebar_pesanan";

export const PesananSaya = () => {
  return (
    <>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <SidebarPesanan />
          </div>
          <div className="col">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quam
            laborum maxime dolores tempora. Asperiores aperiam repudiandae
            architecto culpa quos quod ipsum atque similique porro excepturi
            veritatis, harum perspiciatis perferendis!
          </div>
        </div>
      </div>
    </>
  );
};
