import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>



    </>
    return (
        <div className="navbar border bg-white bg-transparent">
            <div className="flex-1 ml-24 py-6 border">
                <img src="Logo.png" />
            </div>
            <div className="flex-none border mr-32">
                <ul className="flex gap-10 px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;