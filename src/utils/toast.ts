import { toast } from "react-toastify";

type Props = {
    msg: string;
    classname: string;
}

export function toastFailWhite({msg, classname}: Props) {
    toast.error(`${msg}`, {
      closeButton: false,
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: classname,
    });
  }
  