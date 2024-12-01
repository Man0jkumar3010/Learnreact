import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="products"><li>Products</li></NavLink>
        <NavLink to="contacts"><li>Contacts</li></NavLink>
      </ul>
    </div>
  );
};
