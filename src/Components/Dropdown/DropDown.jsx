export const DropDown = ({ handleListValue }) => {
  return (
    <>
      <form action="">
        <select onChange={handleListValue} defaultValue={""}>
          <option value="" disabled>Select</option>
          <option value="chennai">Chennai</option>
          <option value="bangalore">Bangalore</option>
          <option value="pondichery">Pondichery</option>
          <option value="cuddalore">Cuddalore</option>
        </select>
      </form>
    </>
  );
};
