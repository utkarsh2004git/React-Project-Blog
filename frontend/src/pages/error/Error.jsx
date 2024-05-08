import { NavLink } from "react-router-dom";
import "./Error.css"
const Error=()=>{

    return(
        <>
        <div className="bg-slate-400 py-4">
        <section id="error-page">
            <div className="container">
                <h2 className="header">404</h2>
                <h4>Sorry! Page not found</h4>
                <p>Oops! It seems like the page you're trying to access
                    doesn't exist.If you believe there's an issue, feel free to report it, and we'll 
                    look into it.
                </p>
                <div className="btns">
                    <button className="btn  bg-green-400 mx-2 hover:bg-green-500"><NavLink to='/'> return home</NavLink></button>
                    <button className="btn btn-primary mx-2 bg-blue-400 hover:bg-blue-500"><NavLink to='/' >Report</NavLink></button>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}


export default Error;