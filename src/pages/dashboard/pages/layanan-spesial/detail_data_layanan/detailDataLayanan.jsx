import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import SpecialRequestService from "../../../../../services/specialRequest.service";
import noimg from '../../../../../assets/img/noimg.jpg'

import { useEffect } from "react";

export const LayananSpesiaDetaillDashboard = () => {
  const { id } = useParams();
  const layananService = SpecialRequestService();
  const handleGetDetail = async () => {
    const response = await layananService.handleGetSpecialRequest(id);
    if (response.status === 200) {
      // setFormData({
      //   ...formData,
      //   product_name: response.data.product.product_name,
      //   description: response.data.product.description,
      //   price: response.data.product.price,
      //   stock_quantity: response.data.product.stock_quantity,
      //   product_image: response.data.product.product_image,
      // });
      console.log(response.data.product);
    }
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        <div className="container-fluid py-4">
          <nav aria-label="breadcrumb mb-3">
            <ol className="breadcrumb py-4">
              <li className="breadcrumb-item">
                <Link to="">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/dashboard/layanan-spesial">Layanan Spesial</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Nama Customer
              </li>
            </ol>
          </nav>
          <div className="card">
            <div className="h4 bg-primary text-light fw-bold py-2 px-3">
              Pengirim
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-2">Nama</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">Muhammad Syahputra</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">No Handphone</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">08887599774</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Email</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">putramhmmd22@gmail.com</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Alamat</div>
                <div className="col-auto">:</div>
                <div className="col fw-bold">Medan Marelan</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="h4 bg-primary text-light fw-bold py-2 px-3">
              Renovasi Taman
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-2">keterangan</div>
                <div className="col-auto">:</div>
                <div className="col">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium mollitia eius voluptatum architecto unde, sed aliquam excepturi possimus dolorem quis at necessitatibus qui quidem neque! Doloremque vel recusandae modi et quasi itaque laborum eveniet architecto inventore ea libero, fugit consequuntur. Iure quam similique quos nulla, minima dolorum aliquam voluptates optio perferendis, voluptatem corrupti eos blanditiis sed accusantium corporis. Ad quae exercitationem, doloremque quos impedit eos saepe illo veniam aliquid veritatis consectetur qui accusantium sint odit pariatur, est, dicta totam asperiores. Maiores ad architecto, nemo facilis illo libero placeat, quibusdam animi qui magnam dolorum. Odio ipsum nemo voluptatibus praesentium, harum eius.</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Lokasi Proyek</div>
                <div className="col-auto">:</div>
                <div className="col">Medan Sunggal</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Waktu Pengerjaan</div>
                <div className="col-auto">:</div>
                <div className="col">2024-02-22</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Estimasi Budget</div>
                <div className="col-auto">:</div>
                <div className="col">Rp. -</div>
              </div>
              <div className="row mb-3">
                <div className="col-2">Foto</div>
                <div className="col-auto">:</div>
                <div className="col">
                  <img src={noimg} alt="" className="img-fluid" width='200' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
