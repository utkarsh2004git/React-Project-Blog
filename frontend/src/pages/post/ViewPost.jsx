import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import timeSince from "../../assets/TimeStamp";
import "./ViewPost.css";

const ViewPost = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  const getSinglePostData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/viewPost/${params.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch post data");
      }
      const postData = await response.json();
      setPost(postData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSinglePostData();
  }, []);

  return (
    <div className="view-post-container bg-gray-800 min-h-screen flex flex-col justify-center items-center">
      {isLoading && <div className="loading">Loading...</div>}

      {error && <div className="error">Error: {error}</div>}

      {post && (
        <div className="post-wrapper max-w-2xl p-8 rounded shadow-md bg-white flex flex-col gap-4 custom-class">
          <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
          <div className="flex flex-row items-center gap-2">
            <p className="text-gray-600">Author: {post.author}</p>
            <p className="text-gray-600 text-sm">{timeSince(post.createdAt)}</p>
            {post.updatedAt && (
              <p className="text-gray-600 text-sm">Updated: {timeSince(post.updatedAt)}</p>
            )}
          </div>
          <p className="text-gray-700 text-base">{post.detail}</p>
          <a href="/" className="btn btn-primary px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none">Back</a>
        </div>
      )}
    </div>
  );
};

export default ViewPost;
