import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../../../services/auth.service";
import { Toast } from "../../../../../utils/GlobalFunction";
import svg_ilustration from "./../../../../../assets/img/login-ilustration.svg";
import img_icon_prsh from "./../../../../../assets/img/logo.png";
import { FaLock, FaUser } from "react-icons/fa";

export const LoginCustomer = () => {
  const { handleLoginCustomer } = AuthService();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("accessToken_customer");

    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/user-login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await handleLoginCustomer(username, password);
      if (res.message === "SUCCESS") {
        window.localStorage.setItem(
          "accessToken_customer",
          res.data.access_token
        );
        window.localStorage.setItem("customer_id", res.data.customerId);
        window.localStorage.setItem("customer_username", res.data.username);
        Toast.fire({
          icon: "success",
          title: `Selamat Datang ${res.data.username}`,
        });
        navigate("/");
      }
    } catch (error) {
      if (error.status === 404) {
        Toast.fire({
          icon: "error",
          title: `Maaf, User tidak ditemukan`,
        });
      }
    }
  };
  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-secondary">
        <div className="card mb-3" style={{ maxWidth: "950px" }}>
          <div className="row g-0">
            <div className="d-none d-lg-block col-lg-7 p-4 bg-light">
              <h5 className="card-title h3">
                Cacti <span className="ms-2 text-primary">Life</span>
              </h5>
              <div className="img-login m-7">
                <img
                  src={svg_ilustration}
                  className="img-fluid rounded-start"
                  alt="icon"
                />
              </div>
              <div className="fw-bold text-center">
                Selamat Datang di Cacti Life
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  aliquid!
                </p>
              </div>
            </div>
            <div className="col-lg-5 bg-white p-3">
              <div className="card-body">
                <div className="card-title text-center mb-5">
                  <div className="">
                    <img
                      src={img_icon_prsh}
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </div>
                  <span className="h4 fw-bold">Welcome Back</span>
                  <p className="card-text">Sign in to Your Account</p>
                </div>
                <form role="form" onSubmit={handleSubmit}>
                  <label>Email</label>
                  <div className="mb-3">
                    <div
                      className="input-group flex-nowrap"
                      style={{ backgroundColor: "red" }}
                    >
                      <span
                        className="input-group-text px-3"
                        id="addon-wrapping"
                      >
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        className="form-control ps-1"
                        placeholder="Enter Username"
                        aria-label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <label>Password</label>
                  <div className="mb-3">
                    <div className="input-group flex-nowrap">
                      <span
                        className="input-group-text px-3"
                        id="addon-wrapping"
                      >
                        <FaLock />
                      </span>
                      <input
                        type="password"
                        className="form-control ps-1"
                        placeholder="Enter Password"
                        aria-label="Username"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="text-end">
                      <label>Lupa password?</label>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button
                      type="submit"
                      className="btn bg-gradient-success w-100 mt-4 mb-0"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <hr className="mb-3" />
                <p className="text-center fs-7">
                  Tidak punya Akun?{" "}
                  <Link to="/user-register" className="text-primary fw-bold">
                    Daftar
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-8 w-100 bg-white rounded">
              <div className="card-header pb-0 text-left bg-transparent text-center">
                <h3 className="font-weight-bolder text-success text-gradient">
                  Welcome
                </h3>
                <p className="mb-0">Masukan Email dan Password</p>
              </div>
              <div className="card-body">
                <form role="form" onSubmit={handleSubmit}>
                  <label>Email</label>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <label>Password</label>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn bg-gradient-success w-100 mt-4 mb-0"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-4 text-sm mx-auto">
                  Dont have an account?
                  <a
                    className="text-success text-gradient font-weight-bold"
                    href="/user-register"
                  >
                    {" "}
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
