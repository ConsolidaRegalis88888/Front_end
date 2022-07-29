import React from "react";
import {Routes, Route} from "react-router";
import ProductPage from "./features/product_details/presentation/ProductPage";
import Main from "./Main";
import SingleBlogPage from "./features/blog/presentation/components/SingleBlogPage";
import Footer from "./general/footer/Footer";
import BlogPage from "./features/blog/presentation/BlogPage";

function App() {

    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="product/:id" element={<ProductPage/>} />
                    <Route path="blog/:idPost" element={<BlogPage/> } />
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
