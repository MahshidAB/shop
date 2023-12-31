import { Link } from "react-router-dom";
import sampleProductsCss from "./sampleProducts.module.css";
const SampleProduct = ({ data }) => {
  return (
    <div key={data.id} className="card m-1" style={{ width: "18rem" }} id={sampleProductsCss.card}>
      <Link to={`/sampleProducts/${data.id}`}>
        <img
          src={require(`../../Images/${data.url}`)}
          className="card-img-top mt-2"
          alt={data.alt}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title" id={sampleProductsCss.price}>{data.price}</h5>
        <p className="card-text text-center" id={sampleProductsCss.color}>{data.body}</p>
        <Link
          to={`/sampleProducts/${data.id}`}
          className="btn"
          id={sampleProductsCss.btnStyle}
        >
          توضیحات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default SampleProduct;
