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
    <div>
      <table className="w-full table-auto text-sm">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 p-5">
        <th className="px-3 py-5">Id</th>
        <th className="px-3 py-5">Name</th>
        <th className="px-3 py-5">Phone</th>
        <th className="px-3 py-5">Email</th>
        <th className="px-3 py-5">Action</th>
      </thead>
      <tbody>
      { data.map(({firstname, lastname, email, id, phone}) => (
        <tr key={id} className="even:bg-gray-50 odd:bg-white-100 text-center">
          <td className="px-3 py-5">{id}</td>
          <td className="px-3 py-5">{firstname + " " + lastname}</td>
          <td className="px-3 py-5">{phone}</td>
          <td className="px-3 py-5">{email}</td>
          <td className="px-3 py-5">
            <a href={`user/${id}`}className="text-blue-600 hover:underline font-medium cursor-pointer">View</a>
          </td>
        </tr>
      )) }
      </tbody>
    </table>
    </div>
  )
}

export default UserList;