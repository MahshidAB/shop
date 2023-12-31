import { Link } from "react-router-dom";
import productCellphoneCss from "./productCellphone.module.css";

const ProductCellphone = ({ cellphone }) => {
  return (
    <div
      key={cellphone.id}
      className="card m-2"
      style={{ width: "15rem" }}
      id={productCellphoneCss.card}
    >
      <Link to={`/productsCellphones/${cellphone.id}`}>
        <img
          src={require(`../../../Images/${cellphone.url}`)}
          className="card-img-top mt-2"
          alt={cellphone.alt}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title" id={productCellphoneCss.price}>
          {cellphone.price}
        </h5>
        <p className="card-text" id={productCellphoneCss.color}>
          {cellphone.body}
        </p>
        <Link
          to={`/productsCellphones/${cellphone.id}`}
          className="btn"
          id={productCellphoneCss.btnStyle}
        >
          توضیحات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default ProductCellphone;
