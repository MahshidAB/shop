import { Link } from "react-router-dom";
import { useAllProductsSuperMarkets } from "../../../CustomHooks/CustomProductsSuperMarkets";
import ProductSuperMarket from "./ProductSuperMarket"
import productSuperMarketCss from "./productSuperMarket.module.css";

const ProductFurnitures = () => {
  const {
    isLoading: isLodingMarket,
    isError: isErrorMarket,
    error: errorMarket,
    data: market,
  } = useAllProductsSuperMarkets();
  return (
    <div className="col-12 text-center">
      <Link className={productSuperMarketCss.link} to="/productSuperMarkets"><h4 className="mt-4" id={productSuperMarketCss.color}>محصولات سوپرمارکتی</h4></Link>
      <div />
      <div className="col-12 mt-1 text-center">
        {isLodingMarket && (
          <div className="spinner-border text-secondary my-5">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="col-12 mt-4 text-center">
        {isErrorMarket && (
          <p className="text-danger">{errorMarket.message}</p>
        )}
      </div>
      <div className="row justify-content-center flex-wrap m-0">
        {market?.map((elem) => {
          return <ProductSuperMarket key={elem.id} market={elem} />;
        })}
      </div>
    </div>
  );
};

export default ProductFurnitures;
