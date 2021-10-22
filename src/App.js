import React from "react";
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";


function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home}  exact />
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
