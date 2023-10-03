import CheckoutSummary from "../components/CheckoutSummary";

const Checkout = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 relative">
            {/* Left Side */}
            <div>
                <h1 className="text-orange-600 font-bold text-4xl ">
                    Your Cart
                </h1>
            </div>
            {/* Right Side */}
            <CheckoutSummary />
        </div>
    );
};

export default Checkout;
