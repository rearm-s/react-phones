import React from "react";
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";

const Home = React.lazy(() => import('./pages/Home'))

function App() {
    const localStorageRef = JSON.parse(localStorage.getItem("react-phones-cart"))
    console.log(localStorageRef)
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() => {
                    return <React.Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </React.Suspense>
                }}  exact />
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
