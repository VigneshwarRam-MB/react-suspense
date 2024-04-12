import { useState, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DisplayUser from "../components/DisplayUser";
import Loader from "../components/Loader";

const User = () => {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {id: userId} = useParams();

  const handleBack = () => {
    navigate("/");
  }

  const handleShow = () => {
    setShow(true);
  }

  return (
    <>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleShow}>Show</button>
      {show && <Suspense fallback={<Loader/>}>
        <DisplayUser userId={userId}/>
      </Suspense>}
    </>
  )
}

export default User;