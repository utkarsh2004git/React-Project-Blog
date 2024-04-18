import "./Register.css"
import { NavLink } from "react-router-dom";
const Register = () => {
    return (
        <>
            <section>
                <main>
                    <div className="h-screen section-registration p-3 bg-slate-600">
                        <div className="font-bold text-center text-2xl text-white">SIGN UP</div>
                        <div className="container w-2/5 flex-column items-center border-white border-4 rounded-lg p-3 px-5 bg-slate-200 mt-3" >
                            <form action="">
                                <div class="form-group my-2">
                                    <label for="name" className="font-semibold ">Name</label>
                                    <input type="text" className="form-control rounded-md" name="name" id="" placeholder="Enter your name" required autoComplete="off"/>
                                </div>
                                <div class="form-group my-2">
                                    <label for="email" className="font-semibold ">Email</label>
                                    <input type="email" className="form-control rounded-md" name="email" id="" placeholder="Enter your email" required autoComplete="off"/>
                                </div>
                                <div class="form-group my-2">
                                    <label for="password" className="font-semibold ">Password</label>
                                    <input type="password" className="form-control rounded-md" name="password" id="" placeholder="Enter your password" required autoComplete="off"/>
                                </div>

                                <div class="form-group">
                                    <label for="gender " className="font-semibold ">Gender</label>
                                    <select class="form-control" name="gender" id="gender" required  >
                                        <option value="select" name="select" selected disabled >select</option>
                                        <option value="M" name="M" >Male</option>
                                        <option value="F" name="F" >Female</option>
                                        <option value="O" name="O" >Other</option>
                                    </select>
                                </div>
                                <div class="text-center">
                                    <button type="submit" className="btn btn-primary text-center bg-blue-600 mt-3" >Register</button>
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