import { useState } from "react";
import { Link } from "react-router-dom";

import {
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineSearch,
    AiFillTag,
} from "react-icons/ai";
import { BsCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [option, setOption] = useState("Delivery");

    const toggleOption = () => {
        setOption((prevOption) =>
            prevOption === "Delivery" ? "Pickup" : "Delivery"
        );
    };

    return (
        <>
            <div className="max-w-[1640px] mx-auto flex justify-between p-4 overflow-hidden">
                <div className="flex items-center">
                    {/* Left */}
                    <div className="cursor-pointer">
                        <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                        Best{" "}
                        <span className="font-bold tracking-widest">Eats</span>
                    </h1>
                    <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
                        <p
                            className={`p-2 ${
                                option === "Delivery"
                                    ? "bg-black text-white p-2 rounded-full duration-300"
                                    : ""
                            }`}
                            onClick={toggleOption}>
                            Delivery
                        </p>
                        <p
                            className={`p-2 ${
                                option === "Pickup"
                                    ? "bg-black text-white rounded-full duration-300"
                                    : ""
                            }`}
                            onClick={toggleOption}>
                            Pickup
                        </p>
                    </div>
                </div>
                {/* Search Input */}
                <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                    <AiOutlineSearch size={20} />
                    <input
                        type="text"
                        placeholder="Search Foods"
                        className="p-2 bg-transparent focus:outline-none w-full"
                    />
                </div>
                {/* Cart */}
                <Link to="/checkout">
                    <button className="bg-black text-white py-2 hidden md:flex items-center rounded-full hover:bg-orange-500 hover:border-orange-500 font-bold" >
                        <BsCartFill size={20} className="mr-2" /> Cart
                    </button>
                </Link>
                {/* Mobile Menu */}
                {/* Overlay */}
                {nav ? (
                    <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
                ) : (
                    ""
                )}

                {/* Drawer Menu */}
                <div
                    className={
                        nav
                            ? "fixed top-0 left-0 w-[60vw] md:w-[40vw] h-screen bg-white z-10 duration-300"
                            : "fixed top-0 left-[-100%] w-[40vw] h-screen bg-white z-10 duration-300"
                    }>
                    <AiOutlineClose
                        size={30}
                        className=" sm:block absolute top-4 right-4 cursor-pointer"
                        onClick={() => setNav(!nav)}
                    />
                    <Link to="/">
                        <h2 className="text-2xl p-4 hover:text-orange-600">
                            Best <span className="font-bold">Eats</span>
                        </h2>
                    </Link>
                    <nav>
                        <ul>
                            <Link to="/checkout">
                                <li className="text-xl py-4 flex cursor-pointer hover:text-orange-600">
                                    <TbTruckDelivery
                                        size={25}
                                        className="mr-4 ml-2"
                                    />
                                    Cart
                                </li>
                            </Link>
                            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-600">
                                <MdFavorite size={25} className="mr-4 ml-2" />
                                Favorites
                            </li>
                            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-600">
                                <FaWallet size={25} className="mr-4 ml-2" />
                                Wallet
                            </li>
                            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-600">
                                <MdHelp size={25} className="mr-4 ml-2" />
                                Help
                            </li>
                            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-600">
                                <AiFillTag size={25} className="mr-4 ml-2" />
                                Promos
                            </li>
                            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-600">
                                <BsFillSaveFill
                                    size={25}
                                    className="mr-4 ml-2"
                                />
                                Best Ones
                            </li>
                            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-600">
                                <FaUserFriends
                                    size={25}
                                    className="mr-4 ml-2"
                                />
                                Invite Friends
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
