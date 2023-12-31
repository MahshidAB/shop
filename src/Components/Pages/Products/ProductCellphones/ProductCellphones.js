import { Link } from "react-router-dom";
import { useAllProductsCellPhones } from "../../../CustomHooks/CustomProductsCellPhones";
import ProductCellphone from "./ProductCellphone";
import ProductCellphoneCss from "./productCellphone.module.css";

const ProductCellphones = () => {
  const {
    isLoading: isLoadingCellphone,
    isError: isErrorCellphone,
    error: errorCellphone,
    data: cellphone,
  } = useAllProductsCellPhones();
  return (
    <div className="col-12 text-center">
      <Link className={ProductCellphoneCss.link} to={"/productsCellphones"}>
        <h4 className="mt-4" id={ProductCellphoneCss.color}>
          موبایل
        </h4>
      </Link>
      <div />
      <div className="col-12 mt-1 text-center">
        {isLoadingCellphone && (
          <div className="spinner-border text-secondary my-5">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="col-12 mt-4 text-center">
        {isErrorCellphone && (
          <p className="text-danger">{errorCellphone.message}</p>
        )}
      </div>
      <div className="row justify-content-center flex-wrap m-0">
        {cellphone?.map((elem) => {
          return <ProductCellphone key={elem.id} cellphone={elem} />;
        })}
      </div>
    </div>
  );
};

export default ProductCellphones;
