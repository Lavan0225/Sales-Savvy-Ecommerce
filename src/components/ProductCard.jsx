import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const handleAddToCart = () => {

    addToCart(product);

    navigate("/cart");
  };

  return (

    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >

      <img
        src={product.image}
        alt={product.title}

        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain"
        }}
      />

      <h2
        style={{
          fontSize: "18px",
          marginTop: "15px"
        }}
      >
        {product.title}
      </h2>

      <h3>
        ₹ {product.price}
      </h3>

      <button

        onClick={handleAddToCart}

        style={{
          marginTop: "15px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >

        Add To Cart

      </button>

    </div>
  );
}

export default ProductCard;