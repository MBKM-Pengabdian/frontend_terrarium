import parse from "html-react-parser";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductService from "../../../../services/product.service";
import { useEffect, useState } from "react";
import { FaCartPlus, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import {
  Toast,
  formatRupiah,
  nameTitleUrl,
} from "../../../../utils/GlobalFunction";
import CartService from "../../../../services/cart.service";

export const DetailProductPage = () => {
  const navigate = useNavigate();
  const cartservice = CartService();
  const productservice = ProductService();
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [detailProduct, setdetailProduct] = useState();
  const [valQty, setValQty] = useState(1);
  const [listPenilaian, setListPenilaian] = useState([
    {
      profile: "",
      name: "John Doe",
      date: "2024-01-23",
      rating: 4,
      msg: "Pelayanan cukup baik, tetapi masih ada ruang untuk peningkatan.",
    },
    {
      profile: "",
      name: "Alice Smith",
      date: "2024-02-05",
      rating: 5,
      msg: "Pengalaman saya sangat luar biasa! Semuanya sempurna dari awal hingga akhir.",
    },
    {
      profile: "",
      name: "Michael Johnson",
      date: "2024-02-10",
      rating: 3,
      msg: "Pelayanan cukup standar. Ada beberapa masalah yang perlu ditangani.",
    },
    {
      profile: "",
      name: "Emily Brown",
      date: "2024-02-12",
      rating: 4,
      msg: "Saya puas dengan pelayanan secara keseluruhan. Namun, ada beberapa masalah kecil.",
    },
    {
      profile: "",
      name: "David Wilson",
      date: "2024-02-14",
      rating: 5,
      msg: "Sangat direkomendasikan! Pelayanan melebihi ekspektasi saya.",
    },
    {
      profile: "",
      name: "Sarah Lee",
      date: "2024-02-15",
      rating: 2,
      msg: "Sayangnya, pengalaman saya cukup mengecewakan. Ada beberapa masalah yang perlu segera ditangani.",
    },
  ]);

  useEffect(() => {
    handleGetDetail();
    handleGetProductRandom();
  }, []);

  const handleGetProductRandom = async () => {
    try {
      const response = await productservice.handleGetAllProduct();
      if (response.status === 200) {
        setProductData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetDetail = async () => {
    const response = await productservice.handleGetDetailProduct(id);
    if (response.status === 200) {
      setdetailProduct(response.data);
      console.log(response.data);
    }
  };

  const changeValQty = (tipe) => {
    if (tipe == "plus") {
      setValQty(valQty + 1);
    } else {
      if (valQty > 1) {
        setValQty(valQty - 1);
      }
    }
  };

  const handleAddCart = async (idproduct) => {
    const data = {
      customer_id: localStorage.getItem("customer_id"),
      product_id: idproduct,
      quantity: valQty,
    };
    try {
      const response = await cartservice.handleNewShoppingCart(data);
      if (response.status === 200) {
        Toast.fire({
          icon: "success",
          title: `Berhasil Masuk Keranjang`,
        });
      }
    } catch (error) {
      if (error.response.data.status == 401) {
        navigate("/user-login");
      } else {
        Toast.fire({
          icon: "error",
          title: `Ups ada kesalahan!`,
        });
      }
    }
  };
  return (
    <>
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <Link to="/product">Product</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {detailProduct && detailProduct.product.product_name}
            </li>
          </ol>
        </nav>

        {detailProduct && (
          <div className="card bg-white mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    import.meta.env.VITE_API_URL +
                    detailProduct.product.product_image
                  }
                  className="img-fluid rounded-start p-3"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {detailProduct.product.product_name}
                  </h5>
                  <ul className="list-inline small w-50">
                    {[...Array(5)].map((_, i) => (
                      <li className="list-inline-item m-0" key={i}>
                        {i < 2 ? (
                          <FaStar className="text-success fs-6" />
                        ) : (
                          <FaStar className="text-muted fs-6" />
                        )}
                      </li>
                    ))}
                  </ul>
                  <h5 className="card-title">
                    {formatRupiah(detailProduct.product.price)}
                  </h5>
                  <p className="card-text">
                    {parse(detailProduct.product.description)}
                  </p>
                  <div className="mb-2">Kuantitas :</div>
                  <div className="btn-group mb-3">
                    <button
                      className="btn p-2 btn-outline-dark"
                      onClick={() => changeValQty("minus")}
                    >
                      <FaMinus />
                    </button>
                    <button className="btn py-2 btn-outline-dark">
                      {valQty}
                    </button>
                    <button
                      className="btn p-2 btn-outline-dark"
                      onClick={() => changeValQty("plus")}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="w-50">
                    <button
                      className="btn border border-success text-success fs-6"
                      onClick={() => handleAddCart(detailProduct.product.uuid)}
                    >
                      <FaCartPlus /> Masukkan Keranjang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row g-3">
          <div className="col-lg-8">
            <div className="card bg-white">
              <div className="card-body">
                <h5 className="card-title mb-4">Penilaian Produk</h5>
                {listPenilaian.map((data, index) => (
                  <div
                    className="comment mb-4 text-justify border-bottom"
                    key={index}
                  >
                    <div className="row">
                      <div className="col-auto">
                        <img
                          src="https://i.imgur.com/yTFUilP.jpg"
                          alt=""
                          className="rounded-circle img-fluid"
                          style={{ width: "35px", height: "30px" }}
                        />
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col-12">
                            <div className="h6 mb-0">{data.name}</div>
                          </div>
                          <div className="col-12">
                            <div style={{ fontSize: "13px" }}>{data.date}</div>
                          </div>
                          <div className="col-12">
                            <ul className="list-inline small w-50">
                              {[...Array(5)].map((_, i) => (
                                <li className="list-inline-item m-0" key={i}>
                                  {i < data.rating ? (
                                    <FaStar className="text-success" />
                                  ) : (
                                    <FaStar className="text-muted" />
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>{data.msg}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-white">
              <div className="card-body">
                <h5 className="card-title mb-4">Pilihan Untuk Anda</h5>
                {productData &&
                  productData.map((data, index) => (
                    <div
                      className="mb-3"
                      style={{ maxWidth: "540px" }}
                      key={index}
                    >
                      <div className="row g-0">
                        <div className="col-5 col-lg-4 col-md-4 col-sm-4">
                          <img
                            src={
                              import.meta.env.VITE_API_URL + data.product_image
                            }
                            className="img-fluid"
                            alt="..."
                            onClick={() =>
                              navigate(
                                `/product/${nameTitleUrl(data.product_name)}/${
                                  data.uuid
                                }`
                              )
                            }
                            style={{
                              objectFit: "cover",
                              height: "100px",
                              width: "100px",
                            }}
                          />
                        </div>
                        <div
                          className="col col-lg-8 col-md-6 col-sm-6"
                          onClick={() =>
                            navigate(
                              `/product/${nameTitleUrl(data.product_name)}/${
                                data.uuid
                              }`
                            )
                          }
                        >
                          <div
                            className="h6 card-title text-2line"
                            style={{ fontSize: "15px" }}
                          >
                            {data.product_name}
                          </div>
                          <div className="h6">Rp 80.000</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
