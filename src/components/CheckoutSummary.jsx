import { TbTruckDelivery } from "react-icons/tb";
import { BsCheckLg } from "react-icons/bs";

const CheckoutSummary = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 relative">
            <div className="lg:absolute lg:right-0 bg-gray-200 lg:h-[75vh] lg:w-[30vw] mt-10 mx-auto max-w-[640px] ">
                <div className="ml-2 py-2 px-5">
                    <h1 className=" font-bold text-xl">Summary</h1>

                    <div className="flex items-center pt-5 pb-9">
                        <TbTruckDelivery className="text-3xl text-slate-800" />
                        <p className="ml-2">
                            Free Shipping for{" "}
                            <span className="font-bold text-orange-600">
                                Pro{" "}
                            </span>
                            members
                        </p>
                    </div>
                    <div className="border-l-2 border-gray-700 pl-5">
                        <h1>Pay with:</h1>
                        <div className="pl-5 font-bold">
                            <p className="flex items-center">
                                <BsCheckLg className="mr-2 text-gray-500" />{" "}
                                Credit/Debit Card
                            </p>
                            <p className="flex items-center">
                                <BsCheckLg className="mr-2 text-gray-500" />{" "}
                                Paypal
                            </p>
                            <p className="flex items-center">
                                <BsCheckLg className="mr-2 text-gray-500" />{" "}
                                Apple Pay
                            </p>
                        </div>
                    </div>
                    <div className="pl-5 pt-10">
                        <div className="pb-5">
                            <div className="flex justify-between mb-2">
                                <p>Item1</p>
                                <p>Price1</p>
                            </div>
                            <div className="flex justify-between pb-2">
                                <p>Item2</p>
                                <p>Price2</p>
                            </div>
                        </div>
                        <div
                            className="flex justify-between pb-2
                        ">
                            <p>
                                Sales Tax(
                                <span className="font-bold text-sm">
                                    7% included
                                </span>
                                )
                            </p>
                            <p>$25</p>
                        </div>
                        <div className="flex justify-between font-bold text-xl">
                            <p>Total</p>
                            <p>$350</p>
                        </div>
                        <div className="pt-10">
                            <button className="rounded-full bg-black text-white w-full border-black flex items-center justify-center py-2 text-sm font-bold hover:bg-orange-600 hover:border-orange-600 ">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;
