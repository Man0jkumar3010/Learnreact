import React, { useState, useEffect } from "react";
import "./lifecycle.css";

const LifecycleUseEffect = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_API_JOKES) 
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error("Error fetching joke:", error));
  }, []);

  return (
    <div className="main-container">
      <h1>Lifecycle Methods using UseEffect</h1>
      <h4>
        Explanation: In React, lifecycle methods are special methods that get
        called at different stages of a component's existence: from creation to
        updating and finally to destruction. These methods allow you to control
        your component’s behavior at various points in time.
      </h4>
      <div className="joke-container">
        <h2>Random Joke</h2>
        <p>{joke || "Loading..."}</p>
      </div>
    </div>
  );
};

export default LifecycleUseEffect;
