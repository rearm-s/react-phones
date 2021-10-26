import React from "react";
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

// const Home = React.lazy(() => import('./pages/Home'))

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" exact component={Home}/>
                <Route path="/cart" component={Cart} />
            </div>
        </div>
    );
}

export default App;
