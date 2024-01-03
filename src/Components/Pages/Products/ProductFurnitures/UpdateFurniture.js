import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import updateFurnitureCss from "./productFurniture.module.css";
import axios from "axios";

const UpdateFurniture = ({ furniture }) => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const titleRef = useRef("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const updateFurniture = async () => {
      try {
        const res = await axios.put(
          `https://my-json-server.typicode.com/MahshidAB/main-database-part-three/Products_Furniture/${furniture.id}`,
          {
            ...furniture,
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
      } catch (error) {
        console.log(error.message);
      }
      navigate(`/productsFurnitures/${furniture.id}`);
    };
    updateFurniture();
  };

  useEffect(() => {
    titleRef.current.focus();
    setTitle(furniture.title);
    setContext(furniture.context);
  }, []);

  return (
    <div
      className="col-6 text-white mt-4 p-4 offset-3 rounded"
      id={updateFurnitureCss.background}
    >
      <form action="#" onSubmit={(e) => eventHandler(e)}>
        <div className="d-block mb-3">
          <label htmlFor="title" className="mb-3" id={updateFurnitureCss.label}>
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
            id = {updateFurnitureCss.price}
          />
          {title.length === 0 ? (
            <p className="mt-3" id={updateFurnitureCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="d-block mb-3">
          <label htmlFor="body" className="mb-3" id={updateFurnitureCss.label}>
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
            id = {updateFurnitureCss.price}
          ></textarea>
          {context.length === 0 ? (
            <p className="mt-3" id={updateFurnitureCss.warning}>
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
            id={updateFurnitureCss.btnStyle}
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

export default UpdateFurniture;
