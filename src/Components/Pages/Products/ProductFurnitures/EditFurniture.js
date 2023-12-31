import { useEffect, useState } from "react";
import UpdateFurniture from "./UpdateFurniture";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditFurniture = () => {
  const { id } = useParams();
  const [furniture, setFurniture] = useState(null);
  const fetchFurniture = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3004/Products_Furniture/${id}`
      );
      setFurniture(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchFurniture();
  }, []);

  return <>{furniture && <UpdateFurniture furniture={furniture} />}</>;
};

export default EditFurniture;
