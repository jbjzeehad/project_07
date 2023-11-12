import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li className="font-normal text-lg text-[#0B0B0B]"><NavLink to='/'>Home</NavLink></li>
        <li className="font-normal text-lg text-[#0B0B0B]"><NavLink to='/donation'>Donation</NavLink></li>
        <li className="font-normal text-lg text-[#0B0B0B]"><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
    return (
        <div className=" grid grid-cols-2 items-center px-16 bg-white bg-transparent">
            <div className="flex-1  py-6">
                <img src="https://i.ibb.co/ts19M4G/Logo.png" />
            </div>
            <div className=" flex justify-end">
                <ul className="flex gap-10 font-bold text-lg text-[#0B0B0B]">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;