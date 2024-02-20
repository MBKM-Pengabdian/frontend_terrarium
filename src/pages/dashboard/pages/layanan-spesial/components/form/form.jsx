import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ProductService from "../../../../../../services/product.service";
import { Toast } from "../../../../../../utils/GlobalFunction";

export const FormProduct = () => {
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
              onChange={handleChange}
              name="product_name"
            />
            {errors.product_name && (
              <div className="invalid-feedback">{errors.product_name}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Harga</label>
            <input
              type="text"
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
              placeholder="Masukan Harga"
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
              onChange={handleChange}
              name="stock_quantity"
            />
            {errors.stock_quantity && (
              <div className="invalid-feedback">{errors.stock_quantity}</div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label>Deskripsi</label>
            <CKEditor
              editor={ClassicEditor}
              data="<p></p>"
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
              <div className="invalid-feedback">{errors.description}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label>Gambar</label>
            <input
              type="file"
              className="form-control"
              placeholder="Masukan Gambar Product"
              onChange={handleChange}
              name="product_image"
            />
          </div>
        </div>

        <div className="modal-footer justify-content-between align-items-center p-3">
          <button
            type="button"
            className="btn btn-light m-0"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" className="btn btn-success m-0">
            Add
          </button>
        </div>
      </form>
    </>
  );
};
