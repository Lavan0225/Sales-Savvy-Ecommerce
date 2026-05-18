import { useState } from "react";

function Admin() {

  const [products, setProducts] =
    useState(
      JSON.parse(
        localStorage.getItem("products")
      ) || []
    );

  const [title, setTitle] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] =
    useState("");

  // ADD PRODUCT

  const addProduct = () => {

    if (
      title === "" ||
      price === "" ||
      image === ""
    ) {

      alert(
        "Please Fill All Fields"
      );

      return;
    }

    const newProduct = {

      id: Date.now(),

      title,

      price,

      image
    };

    const updatedProducts = [
      ...products,
      newProduct
    ];

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setTitle("");
    setPrice("");
    setImage("");

    alert(
      "Product Added Successfully"
    );
  };

  // DELETE PRODUCT

  const deleteProduct = (id) => {

    const updatedProducts =
      products.filter(
        (product) =>
          product.id !== id
      );

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );
  };

  return (

    <div
      style={{
        padding: "40px",
        textAlign: "center"
      }}
    >

      <h1>
        Admin Dashboard
      </h1>

      {/* FORM */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "400px",
          margin: "30px auto"
        }}
      >

        <input

          type="text"

          placeholder="Product Name"

          value={title}

          onChange={(e) =>
            setTitle(e.target.value)
          }

          style={{
            padding: "12px"
          }}
        />

        <input

          type="number"

          placeholder="Price"

          value={price}

          onChange={(e) =>
            setPrice(e.target.value)
          }

          style={{
            padding: "12px"
          }}
        />

        <input

          type="text"

          placeholder="Image URL"

          value={image}

          onChange={(e) =>
            setImage(e.target.value)
          }

          style={{
            padding: "12px"
          }}
        />

        <button

          onClick={addProduct}

          style={{
            padding: "15px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "10px"
          }}
        >

          Add Product

        </button>

      </div>

      {/* PRODUCTS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >

        {
          products.map((product) => (

            <div
              key={product.id}

              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px"
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

              <h2>
                {product.title}
              </h2>

              <h3>
                ₹ {product.price}
              </h3>

              <button

                onClick={() =>
                  deleteProduct(product.id)
                }

                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >

                Delete

              </button>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Admin;