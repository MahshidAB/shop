import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateSampleProduct from "./UpdateSampleProduct";

const EditSampleProduct = () => {
  const { id } = useParams();
  const [sample, setSample] = useState(null);
  const fetchSampleProduct = async () => {
    const res = await axios.get(`http://localhost:3004/sampleProducts/${id}`);
    setSample(res.data);
  };
  useEffect(() => {
    fetchSampleProduct();
  }, []);

  return <>{sample && <UpdateSampleProduct sample={sample} />}</>;
};

export default EditSampleProduct;
