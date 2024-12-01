import { useEffect, useState } from "react";
import axios from "axios";
import './effect.css'; // Import CSS styles

export const UseEffect = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = 100;
  const postsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_POSTS}?_page=${currentPage}&_limit=${postsPerPage}`
        );
        setLoading(false);
        if (response.status === 200) {
          setPost(response.data);
        } else {
          setError("Error in fetching data");
        }
      } catch (err) {
        setLoading(false);
        setError("Error fetching data");
      }
    };
    fetchData();
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPosts / postsPerPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="header">UseEffect</h1>
      <h4 className="description">
        The useEffect hook in React is used to manage side effects in functional
        components, such as fetching data, updating the DOM, or managing subscriptions.
      </h4>

      <div className="post-container">
        {loading ? (
          <h4 className="loading">Loading...</h4>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="post-grid">
            {post.map((item) => (
              <div className="post-card" key={item.id}>
                <h5 className="post-title">{item.title}</h5>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="button-container">
        <button
          onClick={handlePrev}
          className="btns"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="btns"
          disabled={currentPage === totalPosts / postsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};
