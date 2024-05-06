import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
    const { isLoggedIn, user } = useAuth(); // Assuming user object contains role information
    const isAdmin = (user.role === "Admin");
    const myClass = `transition-all duration-300 hover:text-blue-600  hover:underline`;

    return (
        <>
            <header>
                
                <div className="bg-blue-200 flex justify-between px-5 py-3  navbar border-5 border-b-blue-600">
                    <div className="logo">
                        <h3 className="font-bold text-xl text-white bg-blue-600 p-2 rounded-xl cursor-pointer">UTKARSH</h3>
                    </div>
                    <nav className="flex pr-16">
                        <ul className="flex gap-4 font-bold text-xl">
                            <li className={myClass}><NavLink to="/">Home</NavLink></li>
                            {(isLoggedIn) ? (
                                <>
                                    {isAdmin && <li className={myClass}><NavLink to="/addUser">Add-User</NavLink></li>}
                                    {isAdmin && <li className={myClass}><NavLink to="/addPost">Add-Post</NavLink></li>}
                                    <li className={myClass}><NavLink to="/logout">Logout</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li className={myClass}><NavLink to="/register">Register</NavLink></li>
                                    <li className={myClass}><NavLink to="/login">Login</NavLink></li>
                                    
                                </>
                            )}
                        </ul>
                        
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;