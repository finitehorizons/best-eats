import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import FoodCard from "./components/FoodCard";
import Category from "./components/Category";

import { Routes, Route, Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    index
                    element={
                        <>
                            <Navbar />
                            <Hero />
                            <ProductCards />
                            <FoodCard />
                            <Category />
                        </>
                    }></Route>
                <Route path="/orders" element={<Navbar />}></Route>
            </Routes>
            <Outlet />
        </>
    );
}

export default App;
