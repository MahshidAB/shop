import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateUser from "./UpdateUser";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    const res = await axios.get(
      `https://my-json-server.typicode.com/MahshidAB/main-database-part-one/users/${id}`
    );
    setUser(res.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return <>{user && <UpdateUser user={user} />}</>;
};

export default EditUser;
