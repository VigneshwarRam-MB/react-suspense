import { useState, useEffect } from "react";

const DisplayUser = ({userId}) => {

  const [data, setData] = useState({});

  const { id = "", firstname = "", lastname = "", email = "" } =  data;

  const getUserData = async () => {
    const responseData = await fetch(`https://jsonplaceholder.org/users/${userId}`);
    const userData = await responseData.json();
    setData(userData);
  }

  useEffect(() => {
    getUserData();
  },[]);

  return (
    <>
      {
        data && 
          <div key={id}>
              <p>{id}: Name: {firstname + " " + lastname}</p>
              <p>Email: {email}</p>
          </div>
      }
    </>
  )
}

export default DisplayUser;