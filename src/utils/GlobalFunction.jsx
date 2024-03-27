import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1100,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const showConfirmationDialog = async ({
  title,
  icon,
  confirmButtonText,
  cancelButtonText,
}) => {
  return Swal.fire({
    text: title,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText,
    cancelButtonText,
  });
};

export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatRupiah = (angka, valas = 1) => {
  var reverse = angka.toString().split("").reverse().join("");
  var ribuan = reverse.match(/\d{1,3}/g);
  var formatted = ribuan.join(".").split("").reverse().join("");
  return valas === 0 ? formatted : "Rp " + formatted;
};

export const nameTitleUrl = (text) => {
  // Ganti spasi dengan -
  text = text.replace(/\s+/g, "-");
  // Ganti karakter selain huruf, angka, atau tanda - dengan -
  text = text.replace(/[^a-zA-Z0-9-]/g, "-");
  return text;
};

export const getTanggal = (d) => {
  const date = new Date(d);
  return date.getDate();
};

export const getTahun = (d) => {
  const date = new Date(d);
  const year = date.getFullYear();
  return year;
};

export const getNamaBulan = (d) => {
  const bulanNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const date = new Date(d);
  const bulanIndex = date.getMonth();
  return bulanNames[bulanIndex];
};

export const getWaktu = (d) => {
  const date = new Date(d);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const myDate = (d) => {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const datee = date.getDate();
  return `${year}-${month < 10 ? "0" : ""}${month}-${datee}`;
};
export const convertTime = (inputTime) => {
  let parts = inputTime.split(" ");
  let timePart = parts[1].split("T")[0];
  return timePart;
};

export const getStatusTextClassName = (status) => {
  switch (status) {
    case 1:
      return "text-info";
    case 2:
      return "text-warning";
    case 3:
      return "text-success";
    case 0:
      return "text-danger";
    default:
      return "";
  }
};

export const getStatusBgClassName = (status) => {
  switch (status) {
    case 1:
      return "bg-secondary text-light";
    case 2:
      return "bg-warning text-muted";
    case 3:
      return "bg-success text-muted";
    case 0:
      return "bg-danger text-light";
    default:
      return "";
  }
};

export const getStatusName = (status) => {
  switch (status) {
    case 1:
      return "Menunggu";
    case 2:
      return "Diproses";
    case 3:
      return "Disetujui";
    case 0:
      return "Ditolak";
    default:
      return "";
  }
};
