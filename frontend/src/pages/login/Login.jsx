import "./Login.css"
import { NavLink } from "react-router-dom";
const Login=()=>{
    return (
        <>
            <section>
                <main>
                    <div className="h-screen section-registration p-3 bg-slate-600">
                        <div className="font-bold text-center text-2xl text-white">Login Here</div>
                        <div className="container w-2/5 flex-column items-center border-white border-4 rounded-lg p-3 px-5 bg-slate-200 mt-3" >
                            <form action="">
                                <div class="form-group my-2">
                                    <label for="email" className="font-semibold ">Email</label>
                                    <input type="email" className="form-control rounded-md" name="email" id="" placeholder="" autoComplete="off"/>
                                </div>
                                <div class="form-group my-2">
                                    <label for="password" className="font-semibold ">Password</label>
                                    <input type="password" className="form-control rounded-md" name="password" id="" placeholder="" autoComplete="off"/>
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