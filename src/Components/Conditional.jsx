import { useState } from "react";

export const Conditional = () => {
    const [showAge, SetShowAge] = useState(false);
  return (
    <>
            <h1>Conditional Rendering</h1>
            <p>It renders the anything based on certain conditions</p>
            <p>Example</p>
            { showAge && <p>My Age is 18</p>}
            { !showAge && <p>Age viewing is forbidden</p>}
            <button onClick={()=>SetShowAge(true)}>Show Age</button>
            <button onClick={()=>SetShowAge(false)}>Hide Age</button>
    </>
  );
};
