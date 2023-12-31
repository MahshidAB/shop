import { Route, Routes } from "react-router-dom";
import ProductCellphones from "./ProductCellphones";
import ShowProductCellphone from "./ShowProductCellphone";
import EditCellphone from "./EditCellphone";
import DeleteCellphone from "./DeleteCellphone";

const RouterProductCellphones = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductCellphones />} />
      <Route path="/:id" element={<ShowProductCellphone />} />
      <Route path="/edit/:id" element={<EditCellphone />} />
      <Route path="/delete/:id" element={<DeleteCellphone />} />
    </Routes>
  );
};

export default RouterProductCellphones;
