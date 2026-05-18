import React,
{
  useEffect,
  useState
} from "react";

function Orders() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    const savedOrders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    setOrders(savedOrders);

  }, []);

  return (

    <div
      style={{
        padding: "40px",
        backgroundColor: "#e2e8f0",
        minHeight: "100vh"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "50px"
        }}
      >
        Orders 📦
      </h1>

      {
        orders.length === 0 ? (

          <h2
            style={{
              textAlign: "center"
            }}
          >
            No Orders Yet
          </h2>

        ) : (

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px"
            }}
          >

            {orders.map((item, index) => (

              <div

                key={index}

                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow:
                    "0px 5px 15px rgba(0,0,0,0.2)"
                }}
              >

                <img

                  src={item.image}

                  alt={item.name}

                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }}
                />

                <h2
                  style={{
                    marginTop: "20px"
                  }}
                >
                  {item.name}
                </h2>

                <h3
                  style={{
                    color: "green"
                  }}
                >
                  ₹ {item.price}
                </h3>

                <h3>
                  Quantity:
                  {item.quantity}
                </h3>

                <h2>
                  Total:
                  ₹ {
                    item.price *
                    item.quantity
                  }
                </h2>

                <button
                  style={{
                    marginTop: "15px",
                    padding: "12px 25px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "16px"
                  }}
                >
                  Order Placed
                </button>

              </div>

            ))}

          </div>
        )
      }

    </div>
  );
}

export default Orders;