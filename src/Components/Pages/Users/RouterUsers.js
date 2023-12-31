import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import CreateUsers from "./CreateUsers";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

const RouterUsers = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/createusers" element={<CreateUsers />} />
      <Route path="/delete/:id" element={<DeleteUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
};

export default RouterUsers;
