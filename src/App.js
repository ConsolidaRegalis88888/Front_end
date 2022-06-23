import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import MainPage from "./features/main_pages_detailes/presentation/MainPage";
import Navbar from "./conponents/Navbar";
import SignIn from "./features/signin_detailes/Components/SignIn";
import SignUp from "./features/signin_detailes/Components/SignUp";
import Recovery from "./features/signin_detailes/Components/Recovery";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>} exact/>
                <Route path="/main/signin" element={<SignIn/>}/>
                <Route path="/main/signup" element={<SignUp/>}/>
                <Route path="/main/recovery" element={<Recovery/>}/>
            </Routes>
        </div>

    );
}

export default App;
