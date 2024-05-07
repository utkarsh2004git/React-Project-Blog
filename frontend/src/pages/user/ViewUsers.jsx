import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("User"); // Initial filter

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: token } : {};
        const response = await fetch("http://localhost:3000/api/admin/viewUsers", { headers });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) => filter === "All" || user.role === filter);

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
            className={`btn btn-outline-primary ${filter === "User" ? "active border border-primary" : ""}`}
            onClick={() => setFilter("User")}
          >
            Users
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${filter === "Admin" ? "active border border-primary" : ""}`}
            onClick={() => setFilter("Admin")}
          >
            Admins
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Role</th>
              {filter !== "Admin" && <th>Action</th>} {/* Show only if not Admin */}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.role}</td>
                {filter !== "Admin" && (
                  <td>
                    <button type="button" className="btn btn-primary mx-1" onClick={() => handleEdit(user)}>
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger mx-1" onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewUser;
