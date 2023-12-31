import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersCss from "./users.module.css";
import axios from "axios";

const UpdateUser = ({ user }) => {
  const [name, setName] = useState("");
  const [sirname, setSirname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nationalIdNo, setNationalIdNo] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const nameRef = useRef("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const updateUser = async () => {
      try {
        const res = await axios.put(
          `http://localhost:3004/users/${user.id}`,
          {
            ...user,
            name: name,
            sirname: sirname,
            username: username,
            password: password,
            nationalIdNo: nationalIdNo,
            phone: phone,
            address: address,
          },
          {
            method: "put",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
      } catch (error) {
        console.log(error.message);
      }
      navigate(`/login/${user.id}`);
    };
    updateUser();
  };
  useEffect(() => {
    nameRef.current.focus();
    setName(user.name);
    setSirname(user.sirname);
    setUsername(user.username);
    setPassword(user.password);
    setNationalIdNo(user.nationalIdNo);
    setPhone(user.phone);
    setAddress(user.address);
  }, []);
  return (
    <div
      className="col-6 text-white mt-4 p-4 offset-3 rounded"
      id={usersCss.background}
    >
      <form action="#" onSubmit={(e) => eventHandler(e)}>
        <div className="d-block mb-3">
          <label htmlFor="name" className="mb-3" id={usersCss.label}>
            نام
          </label>
          <input
            type="text"
            name="name"
            placeholder="نام"
            className="form-control mb-3"
            onChange={(e) => setName(e.target.value)}
            value={name}
            ref={nameRef}
          />
          {name.length === 0 ? (
            <p className="mt-3" id={usersCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
          {name.length >= 1 && name.length < 3 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد به بیشتر از ۳ کاراکتر نیاز دارد!
            </p>
          ) : (
            ""
          )}
          {name.length > 500 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد نباید ار ۵۰۰ کاراکتر بیشتر باشد!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block mb-3">
          <label htmlFor="sirname" className="mb-3" id={usersCss.label}>
            نام خانوادگی
          </label>
          <input
            type="text"
            name="sirname"
            placeholder="نام خانوادگی"
            className="form-control mb-3"
            onChange={(e) => setSirname(e.target.value)}
            value={sirname}
          />
          {sirname.length === 0 ? (
            <p className="mt-3" id={usersCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
          {sirname.length >= 1 && sirname.length < 3 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد به بیشتر از ۳ کاراکتر نیاز دارد!
            </p>
          ) : (
            ""
          )}
          {sirname.length > 500 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد نباید ار ۵۰۰ کاراکتر بیشتر باشد!
            </p>
          ) : (
            ""
          )}
        </div>
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
            value={username}
          />
          {username.length === 0 ? (
            <p className="mt-3" id={usersCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
          {username.length >= 1 && username.length < 5 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد به بیشتر از ۵ کاراکتر نیاز دارد!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block mb-3">
          <label htmlFor="password" className="mb-3" id={usersCss.label}>
            پسورد
          </label>
          <input
            type="text"
            name="password"
            placeholder="پسورد"
            className="form-control mb-3"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {password.length === 0 ? (
            <p className="mt-3" id={usersCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
          {password.length >= 1 && password.length < 5 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد به بیشتر از ۵ کاراکتر نیاز دارد!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block mb-3">
          <label htmlFor="nationalIdNo" className="mb-3" id={usersCss.label}>
            کد ملی
          </label>
          <input
            type="text"
            name="nationalIdNo"
            placeholder="کد ملی"
            className="form-control mb-3"
            onChange={(e) => setNationalIdNo(e.target.value)}
            value={nationalIdNo}
          />
          {nationalIdNo.length === 0 ? (
            <p className="mt-3" id={usersCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
          {nationalIdNo.length >= 1 && nationalIdNo.length < 10 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد به ۱۰ کاراکتر نیاز دارد!
            </p>
          ) : (
            ""
          )}
          {nationalIdNo.length >= 11 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد نباید از ۱۰ کاراکتر بیشتر باشد!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block mb-3">
          <label htmlFor="phone" className="mb-3" id={usersCss.label}>
            شماره تماس
          </label>
          <input
            type="text"
            name="phone"
            placeholder="شماره تماس"
            className="form-control mb-3"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          {phone.length === 0 ? (
            <p className="mt-3" id={usersCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
          {phone.length >= 1 && phone.length < 11 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد به ۱۱ کاراکتر نیاز دارد!
            </p>
          ) : (
            ""
          )}
          {phone.length >= 12 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد نباید از ۱۱ کاراکتر بیشتر باشد!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block mb-3">
          <label htmlFor="address" className="mb-3" id={usersCss.label}>
            آدرس
          </label>
          <textarea
            type="text"
            name="address"
            placeholder="آدرس"
            className="form-control"
            style={{ height: "200px", resize: "none" }}
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></textarea>
          {address.length === 0 ? (
            <p className="mt-3" id={usersCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
          {address.length >= 1 && address.length < 20 ? (
            <p className="mt-3" id={usersCss.warning}>
              این فیلد به بیشتر از ۲۰ کاراکتر نیاز دارد!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block">
          <button
            type="submit"
            className="btn text-capitalize mx-1"
            id={usersCss.btnStyle}
            disabled={
              name.length >= 3 &&
              sirname.length >= 3 &&
              username.length >= 5 &&
              password.length >= 5 &&
              nationalIdNo.length == 10 &&
              phone.length == 11 &&
              address.length >= 20
                ? ""
                : "disabled"
            }
          >
            ویرایش
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
