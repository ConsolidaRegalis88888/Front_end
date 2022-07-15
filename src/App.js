import './App.css';
import MainPage from "./features/main_pages_detailes/presentation/MainPage";
import Navbar from "./components/Navbar";
import SignIn from "./features/signin_detailes/presentation/Components/SignIn";
import SignUp from "./features/signin_detailes/presentation/Components/SignUp";
import Recovery from "./features/signin_detailes/presentation/Components/Recovery";
import ProductPage from "./features/product_details/presentation/ProductPage";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>} exact/>
                <Route path="product/:id" element={<ProductPage />} exact />
                <Route path="/main/signin" element={<SignIn/>}/>
                <Route path="/main/signup" element={<SignUp/>}/>
                <Route path="/main/recovery" element={<Recovery/>}/>
            </Routes>
        </div> 

    );
}

export default App;
