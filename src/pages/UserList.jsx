import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getUserData = async () => {
    const responseData = await fetch("https://jsonplaceholder.org/users");
    const userData = await responseData.json();
    setData(userData);
  }

  const viewUser = (id) => {
    navigate(`/user/${id}`);
  }

  useEffect(() => {
    getUserData()
  },[]);

  return (
    <>
      { data.map(({firstname, lastname, email, id}) => (
        <div key={id}>
          <p>{id}: Name: {firstname + " " + lastname}</p>
          <p>Email: {email}</p>
          <button onClick={() => viewUser(id)}>View</button>
        </div>
      )) }
    </>
  )
}

export default UserList;