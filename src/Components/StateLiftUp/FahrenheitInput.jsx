export const FahrenheitInput = ({ value, onChange }) => {
    return (
        <div className="input-group">
        <label className="label">Fahrenheit:</label>
        <input
          className="input"
          type="number"
          placeholder="Fahrenheit"
          value={value}
          onChange={(e) => onChange(e.target.value, "F")}
        />
      </div>
    );
  };