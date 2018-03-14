import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const ProductNew = () => <h2>ProductNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/products" component={Dashboard} />
                    <Route path="/products/new" component={ProductNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
