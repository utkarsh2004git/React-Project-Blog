import "./Home.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../store/auth";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {user}=useAuth();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/public/posts`, {
                    method: "GET",
                    headers: {}
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setPosts(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
        <div className="p-4 rounded-lg ">
            {user && user.name ? (          
                <div className=" flex justify-around text-2xl text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-300 p-2 rounded-lg">
                    <div>Welcome, {user.name.split(" ")[0].charAt(0).toUpperCase() + user.name.split(" ")[0].slice(1)+" "}!</div>
                    <div className=" cursor-pointer bg-green-500 w-fit px-2 rounded-md">Role : {user.role}</div>
                </div>


                
            ) : (
                <div className=" text-white text-2xl font-semibold bg-gradient-to-r from-blue-500 to-blue-300 p-2 rounded-lg ">
                    Welcome, Guest!
                </div>
            )}
        </div>

            <div className="post-container">
            {posts.map((post) => (
                <div key={post._id} className="border-3 border-black m-3">
                    <h2>{post.title}</h2>
                    <p>{post.detail}</p>
                    <p>{post.author}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Home;
