import { Route, Routes } from "react-router-dom";
import SampleProducts from "./SampleProducts";
import ShowSampleProduct from "./ShowSampleProduct";
import EditSampleProduct from "./EditSampleProduct";
import DeleteSampleProduct from "./DeleteSampleProduct";

const RouterSampleProducts = () => {
  return (
    <Routes>
      <Route path="/" element={<SampleProducts />} />
      <Route path="/:id" element={<ShowSampleProduct />} />
      <Route path="/edit/:id" element={<EditSampleProduct />} />
      <Route path="/delete/:id" element={<DeleteSampleProduct />} />
    </Routes>
  );
};

export default RouterSampleProducts;
