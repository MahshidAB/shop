import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import updateSuperMarketCss from "./productSuperMarket.module.css";
import axios from "axios";

const UpdateSuperMarket = ({ market }) => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const titleRef = useRef("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const updateSuperMarket = async () => {
      try {
        const res = await axios.put(
          `http://localhost:3004/Products_SuperMarket/${market.id}`,
          {
            ...market,
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
      navigate(`/productSuperMarkets/${market.id}`);
    };
    updateSuperMarket();
  };
  useEffect(() => {
    titleRef.current.focus();
    setTitle(market.title);
    setContext(market.context);
  }, []);
  return (
    <div
      className="col-6 text-white mt-4 p-4 offset-3 rounded"
      id={updateSuperMarketCss.background}
    >
      <form action="#" onSubmit={(e) => eventHandler(e)}>
        <div className="block mb-3">
          <label
            htmlFor="title"
            className="mb-3"
            id={updateSuperMarketCss.label}
          >
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
            id={updateSuperMarketCss.price}
          />
          {title.length === 0 ? (
            <p className="mt-3" id={updateSuperMarketCss.warning}>
              پر کردن این فیلد الزامی است...
            </p>
          ) : (
            ""
          )}
          <div className="d-block mb-3">
            <label
              htmlFor="body"
              className="mb-3"
              id={updateSuperMarketCss.label}
            >
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
              id={updateSuperMarketCss.price}
            ></textarea>
            {context.length === 0 ? (
              <p className="mt-3" id={updateSuperMarketCss.warning}>
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
              id={updateSuperMarketCss.btnStyle}
              disabled={
                title.length >= 1 && context.length >= 1 ? "" : "disabled"
              }
            >
              ویرایش
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateSuperMarket;
