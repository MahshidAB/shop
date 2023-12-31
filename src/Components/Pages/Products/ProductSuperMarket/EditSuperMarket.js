import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateSuperMarket from "./UpdateSuperMarket";

const EditSuperMarket = () => {
  const { id } = useParams();
  const [market, setMarket] = useState(null);
  const fetchSuperMarket = async () => {
    const res = await axios.get(
      `http://localhost:3004/Products_SuperMarket/${id}`
    );
    setMarket(res.data);
  };
  useEffect(() => {
    fetchSuperMarket()
  }, [])
  return <>{market && <UpdateSuperMarket market={market} />}</>;
};

export default EditSuperMarket;
