import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
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
    title,
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
  const bulanNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const date = new Date(d);
  const bulanIndex = date.getMonth();
  return bulanNames[bulanIndex];
};

export const getWaktu = (d) => {
  const date = new Date(d);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const myDate = (d) => {
   const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth();
  const datee = date.getDate();
  return `${year}-${month < 10 ? '0': '' }${month}-${datee}`;
}
