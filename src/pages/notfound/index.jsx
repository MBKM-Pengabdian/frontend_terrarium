import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <div
        className="p-3 mx-auto text-center d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div className="">
          <h1>404</h1>
          <p>Page Not Found</p>
          <Link to="/" className="btn bg-primary text-light w-100">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};
