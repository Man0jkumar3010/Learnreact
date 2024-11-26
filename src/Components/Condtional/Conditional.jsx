import { useState } from "react";
import './condtional.css';

export const Conditional = () => {
    const [showAge, setShowAge] = useState(false);

    return (
        <div className="conditional-container">
            <h1>Conditional Rendering</h1>
            <div className="display">
                <p>It renders content based on certain conditions:</p>
                <p>Example:</p>
                {showAge ? (
                    <p>My Age is 18</p>
                ) : (
                    <p>Age viewing is forbidden</p>
                )}
            </div>
            <div className="button-container">
                <button onClick={() => setShowAge(true)} className="render-btn">Show Age</button>
                <button onClick={() => setShowAge(false)} className="render-btn">Hide Age</button>
            </div>
        </div>
    );
};
