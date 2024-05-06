import "./Home.css"
import { useAuth } from "../../store/auth";
const Home=()=>{

    const {user}=useAuth();

    return (
<>
    <div className="p-4 rounded-lg ">
        {user && user.name ? (          
            <div className=" flex justify-around text-2xl text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-300 p-2 rounded-lg">
                <div>Welcome, {user.name.split(" ")[0].charAt(0).toUpperCase() + user.name.split(" ")[0].slice(1)+" "}!</div>
                <div className=" cursor-pointer bg-blue-900 w-fit px-2 rounded-md">Role : {user.role}</div>
            </div>


            
        ) : (

                <div className="text-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-300 p-2 rounded-lg">Welcome, Guest!</div>
                
            
        )}
    </div>
        <p className=" mt-2">This is HOME{}</p>
</>



    )
}

export default Home;