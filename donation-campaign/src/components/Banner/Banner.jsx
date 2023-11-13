

const Banner = () => {
    return (
        <div>
            <div className='bg-white pb-3'>
                <div className=" w-full relative">
                    <img className="w-full opacity-10" src="https://i.ibb.co/9HrbJK8/background.png" />
                    <div className="absolute bottom-2/3 text-center w-full">
                        <p className=" font-bold text-4xl text-[#0B0B0B]">I Grow By Helping People In Need</p>
                    </div>
                    <div className="absolute bottom-1/4 left-1/3 px-10 py-14 w-full">
                        <input className="bg-white py-1 px-3 rounded-l-md border border-gray-300" type="text" placeholder="Search here.... " />
                        <button className="text-white font-semibold text-sm px-3 py-1.5 rounded-r-md bg-[#FF444A]">Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;