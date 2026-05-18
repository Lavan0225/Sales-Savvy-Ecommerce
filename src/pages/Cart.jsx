import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {

  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useContext(CartContext);

  // GRAND TOTAL

  const grandTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // PLACE ORDER WITH RAZORPAY

  const placeOrder = () => {

    const options = {

      key: "rzp_test_SmmNyJc60V1Q5m",

      amount: grandTotal * 100,

      currency: "INR",

      name: "Sales Savvy",

      description: "Mobile Purchase",

      image:
        "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",

      handler: function () {

        localStorage.setItem(
          "orders",
          JSON.stringify(cartItems)
        );

        clearCart();

        alert(
          "Payment Successful"
        );

        navigate("/orders");
      },

      prefill: {

        name: "Lavan Kumar",

        email:
          "lavan@gmail.com",

        contact:
          "9999999999"
      },

      theme: {
        color: "#2563eb"
      }
    };

    const razorpay =
      new window.Razorpay(options);

    razorpay.open();
  };

  return (

    <div
      style={{
        padding: "40px",
        textAlign: "center"
      }}
    >

      <h1
        style={{
          marginBottom: "30px"
        }}
      >
        Shopping Cart
      </h1>

      {
        cartItems.length === 0 ? (

          <h2>
            Your Cart is Empty
          </h2>

        ) : (

          <>
            {
              cartItems.map((item) => (

                <div
                  key={item.id}

                  style={{
                    border: "1px solid #ddd",
                    padding: "20px",
                    marginBottom: "20px",
                    borderRadius: "10px",
                    maxWidth: "400px",
                    margin: "20px auto",
                    boxShadow:
                      "0 2px 10px rgba(0,0,0,0.1)"
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.title}

                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain"
                    }}
                  />

                  <h2
                    style={{
                      marginTop: "15px"
                    }}
                  >
                    {item.title}
                  </h2>

                  <h3>
                    ₹ {item.price}
                  </h3>

                  {/* QUANTITY SECTION */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                      marginTop: "15px"
                    }}
                  >

                    <button

                      onClick={() =>
                        decreaseQuantity(item.id)
                      }

                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor: "#2563eb",
                        color: "white",
                        fontSize: "20px",
                        cursor: "pointer"
                      }}
                    >
                      -
                    </button>

                    <h2>
                      {item.quantity}
                    </h2>

                    <button

                      onClick={() =>
                        increaseQuantity(item.id)
                      }

                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor: "#2563eb",
                        color: "white",
                        fontSize: "20px",
                        cursor: "pointer"
                      }}
                    >
                      +
                    </button>

                  </div>

                  {/* ITEM TOTAL */}

                  <h3
                    style={{
                      marginTop: "15px"
                    }}
                  >
                    Total:
                    ₹ {item.price * item.quantity}
                  </h3>

                  {/* REMOVE BUTTON */}

                  <button

                    onClick={() =>
                      removeFromCart(item.id)
                    }

                    style={{
                      marginTop: "20px",
                      padding: "10px 20px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>

                </div>
              ))
            }

            {/* GRAND TOTAL */}

            <div
              style={{
                marginTop: "40px"
              }}
            >

              <h1>
                Grand Total:
                ₹ {grandTotal.toFixed(2)}
              </h1>

              {/* CHECKOUT BUTTON */}

              <button

                onClick={placeOrder}

                style={{
                  marginTop: "30px",
                  padding: "15px 40px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer"
                }}
              >

                Checkout

              </button>

            </div>

          </>
        )
      }

    </div>
  );
}

export default Cart;