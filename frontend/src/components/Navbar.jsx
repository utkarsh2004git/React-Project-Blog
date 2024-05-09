import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";

const Navbar = () => {
    const { isLoggedIn, user } = useAuth();
    const isAdmin = user && user.role === "Admin";
    const myClass = `transition-all duration-300 hover:text-blue-600 hover:underline`;

    return (
        <header>
            <div className="bg-blue-200 flex justify-between px-5 py-3 navbar border-5 border-b-blue-600">
                <div className="logo text-white  bg-blue-600 rounded-xl  p-2  hover:scale-105 transition-all transition-300 ">
                    <h3 className="font-bold text-xl  cursor-pointer">UTKARSH</h3>
                </div>
                <nav className="flex pr-16">
                    <ul className="flex gap-4 font-bold text-xl">
                        <li className={myClass}><NavLink to="/">Home</NavLink></li>
                        {(isLoggedIn) ? (
                            <>
                                {isAdmin && <li className="dropdown">
                                    <span className={`${myClass} cursor-pointer`}>User</span>
                                    <ul className="dropdown-content bg-blue-200 border-2 shadow-md border-blue-600">
                                        {/* <li className={`hover:bg-blue`}><NavLink to="/admin/addUser">Add User</NavLink></li> */}
                                        <li className=""><NavLink to="/admin/viewUsers">View User</NavLink></li>
                                    </ul>
                                </li>}
                                {isAdmin &&<li className="dropdown">
                                <span className={`${myClass} cursor-pointer`}>Posts</span>
                                    <ul className="dropdown-content bg-blue-200 border-2 shadow-md border-blue-600">
                                        <li className=""><NavLink to="/admin/addPost">Add Post</NavLink></li>
                                        <li className=""><NavLink to="/admin/yourPosts">Your Posts</NavLink></li>
                                    </ul>
                                </li>}
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
    );
};

export default Navbar;
