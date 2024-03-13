import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { Toast } from "../../../../../utils/GlobalFunction";
import ProductService from "../../../../../services/product.service";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ProductDetailDashboard = () => {
  const { id } = useParams();
  const productService = ProductService();
  const [formData, setFormData] = useState({
    product_name: "",
    description: "",
    price: "",
    stock_quantity: "",
    product_image: null,
    user_id: localStorage.getItem("user_id"),
  });
  const [errors, setErrors] = useState({});

  const handleGetDetail = async () => {
    const response = await productService.handleGetDetailProduct(id);
    if (response.status === 200) {
      setFormData({
        ...formData,
        product_name: response.data.product.product_name,
        description: response.data.product.description,
        price: response.data.product.price,
        stock_quantity: response.data.product.stock_quantity,
        product_image: response.data.product.product_image,
      });
      console.log(response.data.product);
    }
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "file" ? event.target.files[0] : value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple required field validation
    const requiredFields = [
      "product_name",
      "price",
      "stock_quantity",
      "description",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace("_", " ")} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const addedProduct = await productService.handleAddProduct(payload);
      Toast.fire({
        icon: "success",
        title: "Product berhasil ditambah",
      });
      return addedProduct;
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: `${error}`,
      });
      console.error("Error adding product:", error);
    }
  };
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
                <Link to="/dashboard/product">Product</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {formData.product_name}
              </li>
            </ol>
          </nav>
          <div className="card">
            <div className="card-body">
              <form role="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label>Nama Product</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.product_name ? "is-invalid" : ""
                      }`}
                      placeholder="Masukan Nama Product"
                      value={formData.product_name}
                      onChange={handleChange}
                      name="product_name"
                    />
                    {errors.product_name && (
                      <div className="invalid-feedback">
                        {errors.product_name}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Harga</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.price ? "is-invalid" : ""
                      }`}
                      placeholder="Masukan Harga"
                      value={formData.price}
                      onChange={handleChange}
                      name="price"
                    />
                    {errors.price && (
                      <div className="invalid-feedback">{errors.price}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Stok Product</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.product_name ? "is-invalid" : ""
                      }`}
                      placeholder="Masukan Stok Product"
                      value={formData.stock_quantity}
                      onChange={handleChange}
                      name="stock_quantity"
                    />
                    {errors.stock_quantity && (
                      <div className="invalid-feedback">
                        {errors.stock_quantity}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label>Deskripsi</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={formData.description}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        handleChange({
                          target: {
                            name: "description",
                            value: data,
                            type: "text",
                          },
                        });
                      }}
                    />
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label>Gambar</label>
                    <div className="">
                      <img
                        src={
                          import.meta.env.VITE_API_URL + formData.product_image
                        }
                        alt=""
                        className="img-fluid"
                        width="300"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label>ubah Gambar</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Masukan Gambar Product"
                      onChange={handleChange}
                      name="product_image"
                    />
                  </div>
                </div>

                <div className="modal-footer justify-content-between align-items-center pt-3">
                  <button
                    type="submit"
                    className="btn btn-warning btn-lg text-dark m-0"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
