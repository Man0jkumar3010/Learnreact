import { useState } from "react";
import { DropDown } from "./DropDown";
import "./forwardRef.css";

export const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCountry, setselectedCountry] = useState("");
  const [storeData, setStoredata] = useState("");

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleListValue = (e) => {
    setselectedCountry(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCountry === "") {
      return;
    }
    setStoredata(selectedCountry);
    setShowDropDown(false);
    setselectedCountry("")
  };

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <div className="right">
        <h1>Drop Down</h1>
      </div>
      <div className="right">
        <p onClick={handleDropDown}>
          <strong>Country</strong>
        </p>
        <button
          onClick={handleSubmit}
          disabled={selectedCountry === ""}
          className={selectedCountry === "" ? "disable-btn" : "country-btn"}
        >
          Submit Data
        </button>
        {showDropDown && (
          <DropDown value={selectedCountry} handleListValue={handleListValue} />
        )}
      </div>

      <div>{storeData && <p>{`Selected country is ${storeData}`}</p>}</div>
    </div>
  );
};
