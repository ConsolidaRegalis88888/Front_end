import './App.css';
import ProductPage from "./features/product_details/presentation/ProductPage";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import Footer from "./general/footer/Footer";
import ShoppingCart from "./features/shopping_cart/components/ShoppingCart";

function App() {
  return (
      <>
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>} exact/>
                <Route path="product/:id" element={<ProductPage />} exact />
                <Route path="cart" element={<ShoppingCart />} exact />
            </Routes>
        </div>
        <Footer/>
      </>
  );
}

export default App;
