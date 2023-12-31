import { Link } from "react-router-dom";
import productFurnitureCss from "./productFurniture.module.css";

const ProductFurniture = ({ furniture }) => {
  return (
    <div
      key={furniture.id}
      className="card m-2"
      style={{ width: "15rem" }}
      id={productFurnitureCss.card}
    >
      <Link to={`/productsFurnitures/${furniture.id}`}>
        <img
          src={require(`../../../Images/${furniture.url}`)}
          className="card-img-top mt-2"
          alt={furniture.alt}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title" id={productFurnitureCss.price}>
          {furniture.price}
        </h5>
        <p className="card-text" id={productFurnitureCss.color}>
          {furniture.body}
        </p>
        <Link
          to={`/productsFurnitures/${furniture.id}`}
          className="btn"
          id={productFurnitureCss.btnStyle}
        >
          توضیحات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default ProductFurniture;
