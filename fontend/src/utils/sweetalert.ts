import Swal from 'sweetalert2';

const AlertSuccess = (title = "Thông báo", text = "", time = 2000) => {
  Swal.fire({
    title: title,
    text: text,
    timer: time,
    icon: "success",
    timerProgressBar: true,
    showConfirmButton: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  })
}

const AlertQRATM = (info_pay:string) => {
  const payURL = "https://img.vietqr.io/image/MB-0918447062-qr_only.png?amount=10000&addInfo=" + info_pay + "&accountName=PHAM%20NGUYEN%20HONG";
  return Swal.fire({
    html: `      
    <div className="text-base flex flex-col w-24">
      <img src="`+payURL+`" alt="QR atm" />
      <div className="m-auto text-center">
        <p className="font-bold text-xl">Quét QR để thanh toán, sau khi thanh toán thành công hãy nhấn hoàn thành, nếu muốn hủy thanh toán nhấn hủy</p>
      </div>
    </div>`,
    timerProgressBar: false,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonColor: '#4CAF50',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Hoàn thành',
    cancelButtonText: 'Hủy'
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
}


const AlertError = (title = "Thông báo", text = "Lỗi", time = 2000) => {
  Swal.fire({
    title: title,
    text: text,
    timer: time,
    icon: "error",
    timerProgressBar: true,
    showConfirmButton: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  })
}

const SweetAlert = {
  AlertSuccess,
  AlertError,
  AlertQRATM
}

export default SweetAlert;