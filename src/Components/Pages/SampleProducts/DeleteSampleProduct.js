import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DeleteSampleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-1",
        cancelButton: "btn btn-danger mx-1",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "آیا مایل به حذف هستید؟",
        text: "پس از حذف دیگر قادر به برگرداندن اطلاعات نیستید!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "بله٬ حذف کن!",
        cancelButtonText: "خیر",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "حذف شد!",
            text: "اطلاعات شما با موفقیت حذف شد!",
            icon: "success",
          });
          const res = axios.delete(
            `http://localhost:3004/sampleProducts/${id}`,
            { method: "delete" }
          );
          console.log(res.data);
          navigate("/")
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "کنسل شد",
            text: "خوشبختانه اطلاعات شما محفوظ است!",
            icon: "error",
          });
          navigate(`/sampleProducts/${id}`)
        }
      });

    return ( 
        <></>
     );
}
 
export default DeleteSampleProduct;