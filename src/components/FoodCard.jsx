import { data } from "../assets/data";
import { useState } from "react";

const FoodCard = () => {
    const [foods, setFoods] = useState(data);

    // Filter type burgers/pizza etc
    const filterFoods = (type) => {
        setFoods(data.filter((food) => food.category === type));
    };

    // Filter price
    const filterPrice = (price) => {
        setFoods(data.filter((food) => food.price === price));
    };

    return (
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">
                Top Rated Menu Items
            </h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Filter Type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex flex-wrap justify-between">
                        <button
                            onClick={() => setFoods(data)}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            All
                        </button>
                        <button
                            onClick={() => {
                                filterFoods("pizza");
                            }}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            Pizza
                        </button>
                        <button
                            onClick={() => {
                                filterFoods("salad");
                            }}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            Salad
                        </button>
                        <button
                            onClick={() => {
                                filterFoods("burger");
                            }}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            Burger
                        </button>
                        <button
                            onClick={() => {
                                filterFoods("chicken");
                            }}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            Chicken
                        </button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className="font-bold text-gray-700">Filter Price</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button
                            onClick={() => filterPrice("$")}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            $
                        </button>
                        <button
                            onClick={() => filterPrice("$$")}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            $$
                        </button>
                        <button
                            onClick={() => filterPrice("$$$")}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            $$$
                        </button>
                        <button
                            onClick={() => filterPrice("$$$$")}
                            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
                            $$$$
                        </button>
                    </div>
                </div>
            </div>
            {/* Display Foods Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((food, index) => (
                    <div
                        key={index}
                        className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
                        <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-[200px] object-cover rounded-t-lg"
                        />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{food.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white rounded-full p-1 font-bold">
                                    {food.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCard;
