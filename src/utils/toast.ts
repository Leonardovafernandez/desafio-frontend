import { toast } from "react-toastify";

type Props = {
    msg: string;
    classname: string;
}

export function toastSuccess({msg, classname}: Props) {
  toast.success(`${msg}`, {
    icon: false,
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "colored",
    className: classname,
  });
}

export function toastFailWhite({msg, classname}: Props) {
    toast.error(`${msg}`, {
      closeButton: false,
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: 'light',
      className: classname,
    });
  }
  