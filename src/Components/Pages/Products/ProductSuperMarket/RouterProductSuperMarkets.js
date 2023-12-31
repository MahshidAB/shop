import { Route, Routes } from "react-router-dom";
import ProductSuperMarkets from "../ProductSuperMarket/ProductSuperMarkets";
import ShowProductSuperMarket from "./ShowProductSuperMarket";
import EditSuperMarket from "./EditSuperMarket";
import DeleteSuperMarket from "./DeleteSuperMarket";
const RouterProductSuperMarkets = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductSuperMarkets />} />
      <Route path="/:id" element={<ShowProductSuperMarket />} />
      <Route path="/edit/:id" element={<EditSuperMarket />} />
      <Route path="/delete/:id" element={<DeleteSuperMarket />} />
    </Routes>
  );
};

export default RouterProductSuperMarkets;
