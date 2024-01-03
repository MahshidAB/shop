import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateCellphone from "./UpdateCellphone";

const EditCellphone = () => {
  const { id } = useParams();
  const [cellphone, setCellphone] = useState(null);
  const fetchCellphone = async () => {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/MahshidAB/main-database-part-two/Products_CellPhone/${id}`
      );
      setCellphone(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchCellphone();
  }, []);

  return (
    <>
      {cellphone && <UpdateCellphone cellphone={cellphone} />}
    </>
  );
};

export default EditCellphone;
