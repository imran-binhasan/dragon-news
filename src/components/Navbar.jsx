import { NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto navbar">
            <nav className="navbar-start"></nav>
            <nav className="navbar-center space-x-3">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/carrier'>Carrier</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
            <nav className="navbar-end space-x-2">
                <div>
                    <img className="w-8" src={userIcon}/>
                </div>
                <button className="border py-1 px-5 bg-gray-700 hover:bg-lime-500 text-white font-medium rounded">Login</button>
            </nav>
        </div>
    );
};

export default Navbar;