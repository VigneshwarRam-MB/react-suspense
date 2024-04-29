import { useState, useEffect } from "react";

const DisplayUser = ({userId}) => {

  const [data, setData] = useState({});

  const { id = "", firstname = "", lastname = "", email = "", birthDate = "", website = ""} =  data;

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
          <div key={id} className="lg:w-4/12  sm:w-full md:w-6/12 shadow rounded-lg my-5 p-2 bg-g border border-gray-100">
            <p className="font-bold m-2 text-center border-b border-black-500 pb-2">{firstname + " " + lastname}</p>
              <div className="w-9/12 mx-auto">
                <p className="py-2">Email: {email}</p>
                <p className="py-2">Birth Date: {birthDate}</p>
                <p className="py-2">Username: {website}</p>
              </div>
          </div>
      }
    </>
  )
}

export default DisplayUser;