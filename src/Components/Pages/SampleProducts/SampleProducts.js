import { useAllSampleProducts } from "../../CustomHooks/CustomSampleProducts";
import sampleProductsCss from "./sampleProducts.module.css";
import SampleProduct from "./SampleProduct";
import { Link } from "react-router-dom";
const SampleProducts = () => {
  const { isLoading, isError, error, data } = useAllSampleProducts();
  return (
    <div className="col-12 text-center">
      <Link className={sampleProductsCss.linkStyle} to={"/products"}>
        محصولات
      </Link>
      <div />
      <div className="col-12 mt-1 text-center">
        {isLoading && (
          <div className="spinner-border text-secondary my-5">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="col-12 mt-4 text-center">
        {isError && <p className="text-danger">{error.message}</p>}
      </div>
      <div className="row justify-content-center flex-wrap">
        {data?.map((elem) => {
          return <SampleProduct key={elem.id} data={elem} />;
        })}
      </div>
    </div>
  );
};

export default SampleProducts;
