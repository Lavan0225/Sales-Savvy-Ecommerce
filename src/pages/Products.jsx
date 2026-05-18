import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH PRODUCTS

  useEffect(() => {

    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((response) =>
        response.json()
      )

      .then((data) => {

        setProducts(data);

        setLoading(false);
      })

      .catch((error) => {

        console.log(error);

        setLoading(false);
      });

  }, []);

  // LOADING

  if (loading) {

    return (

      <h1
        style={{
          textAlign: "center",
          marginTop: "50px"
        }}
      >
        Loading Products...
      </h1>
    );
  }

  return (

    <div
      style={{
        padding: "30px"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        All Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px"
        }}
      >

        {
          products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))
        }

      </div>

    </div>
  );
}

export default Products;