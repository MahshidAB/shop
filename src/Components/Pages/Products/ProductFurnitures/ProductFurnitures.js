import { Link } from "react-router-dom";
import { useAllProductsFurnitures } from "../../../CustomHooks/CustomProductsFurnitures";
import ProductFurniture from "./ProductFurniture";
import productFurnitureCss from "./productFurniture.module.css";

const ProductFurnitures = () => {
  const {
    isLoading: isLoadingFurniture,
    isError: isErrorFurniture,
    error: errorFurniture,
    data: furniture,
  } = useAllProductsFurnitures();
  return (
    <div className="col-12 text-center">
      <Link className={productFurnitureCss.link} to="/productsFurnitures"><h4 className="mt-4" id={productFurnitureCss.color}>
        لوازم خانگی
      </h4></Link>
      <div />
      <div className="col-12 mt-1 text-center">
        {isLoadingFurniture && (
          <div className="spinner-border text-secondary my-5">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="col-12 mt-4 text-center">
        {isErrorFurniture && (
          <p className="text-danger">{errorFurniture.message}</p>
        )}
      </div>
      <div className="row justify-content-center flex-wrap m-0">
        {furniture?.map((elem) => {
          return <ProductFurniture key={elem.id} furniture={elem} />;
        })}
      </div>
    </div>
  );
};

export default ProductFurnitures;
