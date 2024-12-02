import { useParams } from "react-router";
import { NotFound } from "../Components/NotFound";

export const ProductDetails = () => {
    const params = useParams();  
    const products = [
        { id: 1, name: "Mens Jeans" },
        { id: 2, name: "Kids Wear" },
        { id: 3, name: "Shirts" },
        { id: 4, name: "T-shirts" },
        { id: 5, name: "Womens" },
      ];

      const product = products.find(item => item.name.replace(" ","-") === params.id)
    
    return (
    <div className="productDetails">
        {product? `Selected Product is ${params.id}` : <NotFound/> }
    </div>
  );
};
