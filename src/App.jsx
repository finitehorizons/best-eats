import Hero from "./components/Hero";

import ProductCards from "./components/ProductCards";
import FoodCard from "./components/FoodCard";
import Category from "./components/Category";
import Layout from "./components/Layout";

import Promos from "./routes/Promos";
import Orders from "./routes/Orders";
import Wallet from "./routes/Wallet";
import Invite from "./routes/Invite";
import Checkout from "./routes/Checkout";
import Favorites from "./routes/Favorites";

import { Routes, Route, Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    index
                    exact
                    element={
                        <>
                            <Layout>
                                <Hero />
                                <ProductCards />
                                <FoodCard />
                                <Category />
                            </Layout>
                        </>
                    }></Route>
                <Route
                    path="/orders"
                    element={
                        <>
                            <Layout>
                                <Orders />
                            </Layout>
                        </>
                    }></Route>
                <Route
                    path="/wallet"
                    element={
                        <>
                            <Layout>
                                <Wallet />
                            </Layout>
                        </>
                    }></Route>
                <Route
                    path="/invite"
                    element={
                        <>
                            <Layout>
                                <Invite />
                            </Layout>
                        </>
                    }></Route>
                <Route
                    path="/favorites"
                    element={
                        <>
                            <Layout>
                                <Favorites />
                            </Layout>
                        </>
                    }></Route>
                <Route
                    path="/checkout"
                    element={
                        <>
                            <Layout>
                                <Checkout />
                            </Layout>
                        </>
                    }></Route>
                <Route
                    path="/promos"
                    element={
                        <Layout>
                            <Promos />
                        </Layout>
                    }></Route>
            </Routes>
            <Outlet />
        </>
    );
}

export default App;
