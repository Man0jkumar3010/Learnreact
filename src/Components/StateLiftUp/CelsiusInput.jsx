export const CelsiusInput = ({ value, onChange }) => {
    return (
        <div className="input-group">
        <label className="label">Celsius:</label>
        <input
          className="input"
          placeholder="Celsius"
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value, "C")}
        />
      </div>
    );
  };
  