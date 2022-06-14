import './App.css';
import ProductPage from "./features/product_details/presentation/ProductPage";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main/>} exact/>
            <Route path="product/:id" element={<ProductPage />} exact />
        </Routes>
    </div>
  );
}

export default App;
