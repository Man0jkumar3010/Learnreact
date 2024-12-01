import React, { useState } from "react";
import { CelsiusInput } from "./CelsiusInput";
import { FahrenheitInput } from "./FahrenheitInput";
import "./liftUp.css";

export const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState({
    celsius: "",
    fahrenheit: "",
  });

  const handleTemperatureChange = (value, scale) => {
    const convertCelsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
    const convertFahrenheitToCelsius = (fahrenheit) =>
      ((fahrenheit - 32) * 5) / 9;

    if (scale === "C") {
      const fahrenheit =
        value === "" ? "" : convertCelsiusToFahrenheit(Number(Math.round(value)));
      setTemperature({ celsius: value, fahrenheit });
    } else if (scale === "F") {
      const celsius =
        value === "" ? "" : convertFahrenheitToCelsius(Number( Math.round(value)));
      setTemperature({ celsius, fahrenheit: value });
    }
  };

  return (
    <>
      <h1>State Lift Up</h1>
      <h4>
        Explanation:State lifting in React refers to the process of moving
        shared state from child components to a common parent component. This is
        done to enable communication between sibling components by managing the
        state in a single place (the parent) and passing the necessary data and
        handlers to the children via props.
        The state for both Celsius and Fahrenheit values is moved to a parent
        component. The parent handles the conversion logic and provides the
        updated values and change handlers to its children.
      </h4>
      <div className="temp-container">
        <h1 className="title">Temperature Converter </h1>
        <CelsiusInput
          value={temperature.celsius}
          onChange={handleTemperatureChange}
        />
        <FahrenheitInput
          value={temperature.fahrenheit}
          onChange={handleTemperatureChange}
        />
      </div>
    </>
  );
};
