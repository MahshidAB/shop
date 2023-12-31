import { useEffect, useRef, useState } from "react";
import usersCss from "./users.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null);
  const usernameRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const eventHandler = (e) => {
    e.preventDefault();
    const user = users?.filter(
      (elem) => elem.username === username && elem.password === password
    );
    if (user.length >= 1) {
      navigate(`/login/${user[0].id}`);
    } else if (user.length == 0) {
      Swal.fire({
        text: "کاربری با این مشخصات یافت نشد!",
        icon: "error",
      });
      navigate("/login")
    }
    usernameRef.current.value = ""
    passRef.current.value = ""
  };
  useEffect(() => {
    usernameRef.current.focus();
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3004/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className={usersCss.size}>
      <div
        className="col-6 text-white mt-5 p-4 offset-3 rounded"
        id={usersCss.background}
      >
        <form action="#" onSubmit={(e) => eventHandler(e)}>
          <div className="d-block mb-3">
            <label htmlFor="username" className="mb-3" id={usersCss.label}>
              نام کاربری
            </label>
            <input
              type="text"
              name="username"
              placeholder="نام کاربری"
              className="form-control mb-3"
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
            />
          </div>
          <div className="d-block mb-3">
            <label htmlFor="username" className="mb-3" id={usersCss.label}>
              پسورد
            </label>
            <input
              type="password"
              name="password"
              placeholder="پسورد"
              className="form-control mb-3"
              onChange={(e) => setPassword(e.target.value)}
              ref = {passRef}
            />
          </div>
          <div className="d-block">
            <button
              type="submit"
              className="btn text-capitalize mx-1"
              id={usersCss.btnStyle}
              disabled={
                username.length >= 5 && password.length >= 5 ? "" : "disabled"
              }
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
