import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar=()=>{
    return(
        <>
        <header>
            <div className="bg-blue-200 flex justify-between px-5 py-3  navbar border-5 border-b-blue-600">
                <div className="logo">
                    <h3 className="font-bold text-xl text-white bg-blue-600 p-2 rounded-xl cursor-pointer">UTKARSH</h3>
                </div>
                <nav className="flex pr-16">
                    <ul className="flex gap-4 font-bold text-xl">
                        <li className="transition-all duration-300 hover:text-blue-600  hover:underline"><NavLink to="/">Home</NavLink></li>
                        <li className="transition-all duration-300 hover:text-blue-600 hover:underline"><NavLink to="/register">Register</NavLink></li>
                        <li className="transition-all duration-300 hover:text-blue-600 hover:underline"><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    );
}

export default Navbar;