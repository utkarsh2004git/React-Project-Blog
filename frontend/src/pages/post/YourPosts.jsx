import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useAuth } from "../../store/auth";
import timeSince from "../../assets/TimeStamp";

const YourPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, authorizationToken } = useAuth();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Your");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/admin/yourPosts`, { 
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          }
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
  }, [authorizationToken]);

  let filteredPosts;
  if (filter === "Your") {
    filteredPosts = posts.filter((post) => post.userId === user._id);
  } else {
    filteredPosts = posts;
  }

  if (user.role !== "Admin") {
    navigate("/error");
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container text-center">
        <div className="btn-group pt-3">
          <button
            type="button"
            className={`btn btn-outline-primary ${filter === "All" ? "active border border-primary" : ""}`}
            onClick={() => setFilter("All")}
          >
            All Posts
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${filter === "Your" ? "active border border-primary" : ""}`}
            onClick={() => setFilter("Your")}
          >
            Your Posts
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post._id}>
                <td>{post.author}</td>
                <td>{post.title}</td>
                <td>{timeSince(post.createdAt)}</td>
                <td>{timeSince(post.updatedAt)}</td>

                {user._id === post.userId && (
                  <td>
                    <Link to={`/admin/viewUsers/editUser/${user._id}`}>
                      <button type="button" className="btn btn-primary mx-1">
                        Edit
                      </button>
                    </Link>
                    <button type="button" className="btn btn-danger mx-1" onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                  </td>
                )}
                {
                  user._id !== post.userId && (
                    <td>
                      <button className="btn btn-warning text-white border-2 border-yellow-700">Not Authorized</button>
                    </td>
                  )
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default YourPosts;
