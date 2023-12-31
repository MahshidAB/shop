import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import RouterSampleProducts from "../Pages/SampleProducts/RouterSampleProducts";
import Products from "../Pages/Products/Products";
import RouterProductCellphones from "../Pages/Products/ProductCellphones/RouterProductCellphones";
import RouterProductFurnitures from "../Pages/Products/ProductFurnitures/RouterProductFurnitures";
import RouterProductSuperMarkets from "../Pages/Products/ProductSuperMarket/RouterProductSuperMarkets";
import Footer from "../Pages/Footer/Footer";
import LoginUser from "../Pages/Users/LoginUser";
import RouterUsers from "../Pages/Users/RouterUsers";
import User from "../Pages/Users/User";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/productsCellphones/*"
          element={<RouterProductCellphones />}
        />
        <Route
          path="/productsFurnitures/*"
          element={<RouterProductFurnitures />}
        />
        <Route
          path="/productSuperMarkets/*"
          element={<RouterProductSuperMarkets />}
        />
        <Route path="/sampleProducts/*" element={<RouterSampleProducts />} />
        <Route path="/users/*" element={<RouterUsers />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/login/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
