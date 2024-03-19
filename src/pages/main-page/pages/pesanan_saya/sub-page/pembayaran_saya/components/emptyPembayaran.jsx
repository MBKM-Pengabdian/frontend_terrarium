export const CompnentEmptyPembayaran = ({ text, img }) => {
  return (
    <div className="text-center py-4">
      <img
        src={img}
        className="img-fluid"
        style={{ width: "200px" }}
        alt="empty cart"
      />
      <div className="fs-5 fw-bold mt-3">{text}</div>
    </div>
  );
};
