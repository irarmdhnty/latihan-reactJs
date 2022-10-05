

const PriceTable = () => {
    return (
        <div className="mb-10">
            <div className="text-center font-bold">
                <p className="text-4xl">Price Table</p>
                <p className="text-lg">we offer competitive price</p>
            </div>
            <div className="flex justify-center mt-8">
                <div className="text-center shadow-2xl rounded-xl w-64 ">
                    <p className="font-bold text-2xl">Free</p>
                    <p className="font-semibold text-lg">Brief price description</p>
                    <div className="flex items-center">
                        <div className="ml-10">
                            <p className="text-8xl text-[#02897A]">0</p>
                        </div>
                        <div className="text-start">
                            <span className="font-bold text-[#02897A] text-xl">$</span>
                            <p className="text-gray-400 mt-3">Per / month</p>
                        </div>
                    </div>
                    <div className="mb-5 text-lg">
                        <p className="mb-3 mt-2">Only 2 Operators</p>
                        <p className="mb-3">Notifications</p>
                        <p>Landing Pages</p>
                    </div>
                    <div className="mb-10">
                        <a href="#" className='text-white rounded-md bg-[#02897A] hover:bg-green-200  py-2 px-5 font-bold text-lg'>Order Now</a>
                    </div>
                </div>

                <div className="text-center ml-14 shadow-2xl rounded-xl w-64 bg-[#02897A] text-white">
                    <p className="font-bold text-2xl">Standard</p>
                    <p className="font-semibold text-lg">Brief price description</p>
                    <div className="flex items-center">
                        <div className="ml-10">
                            <p className="text-8xl">5</p>
                        </div>
                        <div className="text-start">
                            <span className="font-bold text-xl">$</span>
                            <p className="text-gray-400 mt-3">Per / month</p>
                        </div>
                    </div>
                    <div className="mb-5 text-lg">
                        <p className="mb-3 mt-2">5+ Operators</p>
                        <p className="mb-3">Notifications</p>
                        <p>Landing Pages</p>
                    </div>
                    <div className="mb-10">
                        <a href="#" className='text-[#02897A] rounded-md bg-white hover:bg-green-200  py-2 px-5 font-bold text-lg'>Order Now</a>
                    </div>
                </div>

                <div className="text-center ml-14 shadow-2xl rounded-xl w-64">
                    <p className="font-bold text-2xl">Premium</p>
                    <p className="font-semibold text-lg">Brief price description</p>
                    <div className="flex items-center">
                        <div className="ml-10">
                            <p className="text-8xl text-[#02897A]">10</p>
                        </div>
                        <div className="text-start">
                            <span className="font-bold text-[#02897A] text-xl">$</span>
                            <p className="text-gray-400 mt-3">Per / month</p>
                        </div>
                    </div>
                    <div className="mb-5 text-lg">
                        <p className="mb-3 mt-2">10+ Operators</p>
                        <p className="mb-3">Notifications</p>
                        <p>Landing Pages</p>
                    </div>
                    <div className="mb-10">
                        <a href="#" className='text-white rounded-md bg-[#02897A] hover:bg-green-200  py-2 px-5 font-bold text-lg'>Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceTable