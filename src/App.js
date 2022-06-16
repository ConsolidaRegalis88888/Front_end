import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./features/main_pages_detailes/presentation/MainPage";


function App() {
    return (


        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>} exact/>
            </Routes>
        </div>

    );
}

export default App;
