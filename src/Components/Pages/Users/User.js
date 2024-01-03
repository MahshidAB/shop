import { Link, useParams } from "react-router-dom";
import usersCss from "./users.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");

  const fetchUser = async () => {
    try {
      // const res = await axios.get(`http://localhost:3004/users/${id}`);
      const res = await axios.get(`https://my-json-server.typicode.com/MahshidAB/main-database-part-one/users/${id}`);
      setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div
      className="col-8 text-white mt-5 p-5 offset-2 rounded"
      id={usersCss.table}
    >
      <table className="table table-bordered" id={usersCss.tableM}>
        <thead>
          <tr>
            <th scope="col" colSpan="2" className="text-center" id={usersCss.textColor}>
              مشخصات کاربر
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" id={usersCss.textColor}>نام</th>
            <td id={usersCss.price}>{user.name}</td>
          </tr>
          <tr>
            <th scope="row" id={usersCss.textColor}>نام خانوادگی</th>
            <td id={usersCss.price}>{user.sirname}</td>
          </tr>
          <tr>
            <th scope="row" id={usersCss.textColor}>نام کاربری</th>
            <td id={usersCss.price}>{user.username}</td>
          </tr>
          <tr>
            <th scope="row" id={usersCss.textColor}>رمز عبور</th>
            <td colSpan="2" id={usersCss.price}>{user.password}</td>
          </tr>
          <tr>
            <th scope="row" id={usersCss.textColor}>شماره تماس</th>
            <td colSpan="3" id={usersCss.price}>{user.phone}</td>
          </tr>
          <tr>
            <th scope="row" id={usersCss.textColor}>آدرس</th>
            <td colSpan="2" id={usersCss.price}>{user.address}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <Link to={`/users/edit/${user.id}`}>
          <button className="btn mx-1 mt-1" id={usersCss.btnStyle}>
            ویرایش
          </button>
        </Link>
        <Link to={`/users/delete/${user.id}`}>
          <button className="btn mx-1 mt-1" id={usersCss.btnStyle}>
            حذف
          </button>
        </Link>
        <Link to={`/login`}>
          <button className="btn mx-1 mt-1" id={usersCss.btnStyle}>
            خروج
          </button>
        </Link>
      </div>
    </div>
  );
};

export default User;
