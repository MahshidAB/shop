import { useEffect, useRef, useState } from "react";
import updateCellphoneCss from "./productCellphone.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateCellphone = ({ cellphone }) => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const titleRef = useRef("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const updateCellphone = async () => {
      try {
        const res = await axios.put(
          `https://my-json-server.typicode.com/MahshidAB/main-database-part-two/Products_CellPhone/${cellphone.id}`,
          {
            ...cellphone,
            title: title,
            context: context,
          },
          {
            method: "put",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
      navigate(`/productsCellphones/${cellphone.id}`);
    };
    updateCellphone();
  };

  useEffect(() => {
    titleRef.current.focus();
    setTitle(cellphone.title);
    setContext(cellphone.context);
  }, []);

  return (
    <div
      className="col-6 text-white mt-4 p-4 offset-3 rounded"
      id={updateCellphoneCss.background}
    >
      <form action="#" onSubmit={(e) => eventHandler(e)}>
        <div className="d-block mb-3">
          <label htmlFor="title" className="mb-3" id={updateCellphoneCss.label}>
            عنوان
          </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            className="form-control mb-3"
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
            value={title}
            id = {updateCellphoneCss.price}
          />
          {title.length === 0 ? (
            <p className="mt-3" id={updateCellphoneCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block mb-3">
          <label htmlFor="body" className="mb-3" id={updateCellphoneCss.label}>
            توضیحات
          </label>
          <textarea
            type="text"
            name="body"
            placeholder="body"
            className="form-control"
            style={{ height: "300px", resize: "none" }}
            value={context}
            onChange={(e) => setContext(e.target.value)}
            id = {updateCellphoneCss.price}
          ></textarea>
          {context.length === 0 ? (
            <p className="mt-3" id={updateCellphoneCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block">
          <button
            type="submit"
            className="btn text-capitalize"
            id={updateCellphoneCss.btnStyle}
            disabled={
              title.length >= 1 && context.length >= 1 ? "" : "disabled"
            }
          >
            ویرایش
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCellphone;
