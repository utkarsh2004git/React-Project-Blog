import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Import Swal for displaying alerts
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const AdminUpdatePost = () => {
  const [data, setData] = useState({
    title: "",
    detail: "",
  });
  const params = useParams();
  const navigate=useNavigate();
  const {user,authorizationToken} = useAuth();

  const getSinglePostData = async () => {
    try {

      const headers = token ? { "Content-Type": "application/json", Authorization: authorizationToken } : {};
      const response = await fetch(`http://localhost:3000/api/admin/yourPosts/editPost/${params.id}`, {
        method: "GET",
        headers,
      });
      const postData = await response.json();
      console.log(postData);
      setData({
        title: postData.title,
        detail: postData.detail, 
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  useEffect(() => {
    getSingleUserData();
  }, []); 

  const handleInput = (e) => {
   
    let name=e.target.name;
    let value=e.target.value;
    setData({
        ...data,
        [name]:value,
    })
    };
     const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const token = localStorage.getItem("token");
          const headers = token ? { 
            Authorization: token,
            "Content-Type": "application/json" 
          } : {};
          
          const requestBody = JSON.stringify(data);
      
          const response = await fetch(`http://localhost:3000/api/admin/yourPosts/editPost/${params.id}`, {
            method: "PATCH",
            headers,
            body: requestBody, // Pass the updated data as the request body
          });
      
          if (response.ok) {
            Swal.fire("Updated!", "User updated successfully!", "success");
            navigate('/admin/viewUsers');
          } else {
            const errorData = await response.json(); 
            Swal.fire("Error!", errorData.message || "An error occurred while updating the user.", "error");
          }
        } catch (error) {
          console.error("Error updating user:", error);
          Swal.fire("Error!", "An unexpected error occurred. Please try again later.", "error");
        }
      };
      

  return (
    <div className="bg-slate-600 py-3">
      <div className="container w-2/5 border-3 border-blue-900 py-3 p-2 rounded-lg bg-slate-200">
        <h2 className="text-center text-3xl mt-2 text-blue-600">Edit User</h2>
        <form onSubmit={handleSubmit}>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdatePost;
