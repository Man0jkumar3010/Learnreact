import React, { useRef } from "react";
import './ForwardRef.css'; // Import the CSS file

export const ForwardRef = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="forward-ref-container">
      <h1 className="forward-ref-heading">Forward Ref Example</h1>
      <ChildRef ref={inputRef} />
      <button className="focus-button" onClick={focusInput}>Focus Input</button>
    </div>
  );
};

const ChildRef = React.forwardRef((props, ref) => {
  return (
    <div className="child-ref-container">
      <h2>This is a Forward Ref Component</h2>
      <input className="input-field" ref={ref} type="text" placeholder="Type something here" />
    </div>
  );
});
