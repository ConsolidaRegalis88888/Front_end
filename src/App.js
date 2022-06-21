import React from "react";
import {Routes, Route} from "react-router";
import ProductPage from "./features/product_details/presentation/ProductPage";
import Main from "./Main";
import BlogPage from "./features/blog/presentation/BlogPage";
import Footer from "./general/footer/Footer";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>} exact/>
                    <Route path="product/:id" element={<ProductPage/>} exact/>
                    <Route path="blog" element={<BlogPage/>} exact/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
