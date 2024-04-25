import "./Login.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Login=()=>{
    const [user,setUser]=useState({
        email:"",
        password:"",
    });

    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setUser({
            ...user,
            [name]:value,
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // alert(user);
        console.log(user);
    }

    
    return (
        <>
            <section>
                <main>
                    <div className="h-screen section-registration p-3 bg-slate-600">
                        <div className="font-bold text-center text-2xl text-white">Login Here</div>
                        <div className="container w-2/5 flex-column items-center border-white border-4 rounded-lg p-3 px-5 bg-slate-200 mt-3" >
                            <form action="" onSubmit={handleSubmit}>
                                <div class="form-group my-2">
                                    <label for="email" className="font-semibold ">Email</label>
                                    <input type="email" className="form-control rounded-md" 
                                    name="email" id="" placeholder="Enter your email" 
                                    autoComplete="off" onChange={handleInput} required/>
                                </div>
                                <div class="form-group my-2">
                                    <label for="password" className="font-semibold ">Password</label>
                                    <input type="password" className="form-control rounded-md" 
                                    name="password" id="" placeholder="Enter your password"
                                    autoComplete="off" onChange={handleInput} required/>
                                </div>
                                <div class="text-center">
                                    <button type="submit" className="btn btn-primary text-center bg-blue-600 mt-3" >Login</button>
                                </div>
                                <NavLink to="/register" className="font-semibold text-primary">New Here?</NavLink>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Login;