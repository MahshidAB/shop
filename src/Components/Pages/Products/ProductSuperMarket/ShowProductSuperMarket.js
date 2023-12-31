import { Link, useParams } from "react-router-dom";
import { useProductSuperMarket } from "../../../CustomHooks/CustomProductsSuperMarkets";
import productSuperMarketCss from "./productSuperMarket.module.css";

const ShowProductSuperMarket = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useProductSuperMarket(id);
  return (
    <>
      <div className="col-12 text-center mt-4">
        {isLoading && (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="col-12 text-center mt-5">
        {isError && <p className="text-danger">{error.message}</p>}
      </div>
      {data && (
        <div className="row justify-content-align-content-between align-items-center m-0">
          <div className="col-12 col-lg-4" id={productSuperMarketCss.media}>
            <img
              src={require(`../../../Images/${data.url}`)}
              className={productSuperMarketCss.img}
              alt={data.alt}
            />
          </div>
          <div className="col-12 col-lg-8">
            <div className="m-3 p-2">
              <h5 className="fw-bold mb-3">{data.title}</h5>
              <p className="" id={productSuperMarketCss.text}>
                {data.context}
              </p>
              <Link
                to={`/productSuperMarkets/edit/${id}`}
                className="btn mx-1"
                id={productSuperMarketCss.btnStyle}
              >
                ویرایش
              </Link>
              <Link
                to={`/productSuperMarkets/delete/${id}`}
                className="btn mx-1"
                id={productSuperMarketCss.btnStyle}
              >
                حذف
              </Link>
              <Link
                to={`/productSuperMarkets`}
                className="btn mx-1"
                id={productSuperMarketCss.btnStyle}
              >
                بازگشت
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowProductSuperMarket;
