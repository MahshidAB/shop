import { Link } from "react-router-dom";
import productSupermarketCss from "./productSuperMarket.module.css";

const ProductSuperMarket = ({ market }) => {
  return (
    <div
      key={market.id}
      className="card m-2"
      style={{ width: "15rem" }}
      id={productSupermarketCss.card}
    >
      <Link to={`/productSuperMarkets/${market.id}`}>
        <img
          src={require(`../../../Images/${market.url}`)}
          className="card-img-top mt-2"
          alt={market.alt}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title" id={productSupermarketCss.price}>
          {market.price}
        </h5>
        <p className="card-text" id={productSupermarketCss.color}>
          {market.body}
        </p>
        <Link
          to={`/productSuperMarkets/${market.id}`}
          className="btn"
          id={productSupermarketCss.btnStyle}
        >
          توضیحات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default ProductSuperMarket;
