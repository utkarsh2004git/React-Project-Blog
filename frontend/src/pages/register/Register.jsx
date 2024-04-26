import "./Register.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
    });
    
    const navigate = useNavigate();

    const  {storeTokenInLS}=useAuth();
    
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`http://localhost:3000/api/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const res_data= await response.json();
                console.log("response  data ",res_data);

                //local storage token
                storeTokenInLS(res_data.token);
                setUser({
                    name: "",
                    email: "",
                    password: "",
                    gender: "",
                });
                navigate("/");
            }

            console.log(response);
        } catch (error) {
            console.log("register", error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="h-screen section-registration pt-3 bg-slate-600">
                        <div className="font-bold text-center text-2xl text-white">SIGN UP</div>
                        <div className="container w-2/5 flex-column items-center border-white border-4 rounded-lg p-3 px-5 bg-slate-200 mt-3">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group my-2">
                                    <label htmlFor="name" className="font-semibold">Name</label>
                                    <input type="text" className="form-control rounded-md" onChange={handleInput}
                                        value={user.name} name="name" id="name" placeholder="Enter your name"
                                        required autoComplete="off" />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="email" className="font-semibold">Email</label>
                                    <input type="email" className="form-control rounded-md" onChange={handleInput}
                                        value={user.email} name="email" id="email" placeholder="Enter your email"
                                        required autoComplete="off" />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="password" className="font-semibold">Password</label>
                                    <input type="password" className="form-control rounded-md" onChange={handleInput} name="password"
                                        value={user.password} id="password" placeholder="Enter your password"
                                        required autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender" className="font-semibold">Gender</label>
                                    <select className="form-control" name="gender" id="gender" required onChange={handleInput} value={user.gender}>
                                        <option value="" disabled>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary text-center bg-blue-600 mt-3">Register</button>
                                </div>
                                <NavLink to="/login" className="font-semibold text-primary">Already Registered?</NavLink>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Register;
