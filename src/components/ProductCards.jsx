const ProjectCards = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative ">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">
                        Sun's Out, BOGO's Out
                    </p>
                    <p className="px-2">Through 10/25</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-orange-600 hover:border-orange-600">
                        Order Now
                    </button>
                </div>
                <img
                    className="rounded-xl max-h-[160px] md:max-h-[200px] object-cover w-full"
                    src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                    alt=""
                />
            </div>
            {/* Card */}
            <div className="rounded-xl relative ">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">
                        New Restaurants
                    </p>
                    <p className="px-2">Added Recently</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-orange-600 hover:border-orange-600">
                        Order Now
                    </button>
                </div>
                <img
                    className="rounded-xl max-h-[160px] md:max-h-[200px] object-cover w-full"
                    src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                    alt=""
                />
            </div>
            {/* Card */}
            <div className="rounded-xl relative ">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">
                        We Deliver Desserts Too
                    </p>
                    <p className="px-2">Tasty Treats </p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:text-white hover:bg-orange-600 hover:border-orange-600">
                        Order Now
                    </button>
                </div>
                <img
                    className="rounded-xl max-h-[160px] md:max-h-[200px] object-cover w-full"
                    src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ProjectCards;
