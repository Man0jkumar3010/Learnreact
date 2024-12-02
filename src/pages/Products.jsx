import { Link } from "react-router-dom";
import {
  Outlet,
} from "react-router-dom";

export const Products = () => {
 const products = [
    { id: 1, name: "Mens Jeans" },
    { id: 2, name: "Kids Wear" },
    { id: 3, name: "Shirts" },
    { id: 4, name: "T-shirts" },
    { id: 5, name: "Womens" },
  ];
  return (
    
    <div
      className="prod-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
       <Outlet />
      {products.map((prod) => (
        <div className="prod-card" key={prod.id}>
          <Link to={`/products/${prod.name.replace(" ","-")}`}>
            {prod.name}
          </Link>
        </div>
      ))}

    </div>
  );
};


