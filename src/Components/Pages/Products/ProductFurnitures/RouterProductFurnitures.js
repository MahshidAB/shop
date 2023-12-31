import { Route, Routes } from "react-router-dom";
import ProductFurnitures from "./ProductFurnitures";
import ShowProductFurniture from "./ShowProductFurniture";
import EditFurniture from "./EditFurniture";
import DeleteFurniture from "./DeleteFurniture";

const RouterProductFurnitures = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductFurnitures />} />
      <Route path="/:id" element={<ShowProductFurniture />} />
      <Route path="/edit/:id" element={<EditFurniture />} />
      <Route path="/delete/:id" element={<DeleteFurniture />} />
    </Routes>
  );
};

export default RouterProductFurnitures;
