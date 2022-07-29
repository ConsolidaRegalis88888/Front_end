import React from "react";
import {Routes, Route} from "react-router";
import ProductPage from "./features/product_details/presentation/ProductPage";
import Main from "./Main";
import SingleBlogPage from "./features/blog/presentation/components/SingleBlogPage";
import Footer from "./general/footer/Footer";

function App() {

    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="product/:id" element={<ProductPage/>} />
                    <Route path="blog/:idPost" element={<SingleBlogPage/> } />
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
