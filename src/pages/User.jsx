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
    <div className="m-5">
      <button className="bg-yellow-500 text-white rounded-full p-2 mx-2 text-sm hover:bg-yellow-600 focus:ring focus:ring-white-50" onClick={handleBack}>Back</button>
      <button className="bg-blue-500 text-white rounded-full p-2 mx-2 text-sm hover:text-md hover:bg-blue-600 focus:ring focus:ring-white-50" onClick={handleShow}>Show</button>
      {show && <Suspense fallback={<Loader/>}>
        <DisplayUser userId={userId}/>
      </Suspense>}
    </div>
  )
}

export default User;