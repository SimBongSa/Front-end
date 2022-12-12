import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ status }) => {

  const success = () => toast.success("Success!");
  const error = () => toast.error("Error!");
  const info = () => toast.info("Info!");

  console.log(status)

  useEffect(() => {
    if (!status) {
      error();
    }
  })

  return (
    <div>
      <button onClick={success}>Success</button>
      <button onClick={error}>error</button>
      <button onClick={info}>info</button>
      <ToastContainer/>
    </div>
  )
};

export default Notification;