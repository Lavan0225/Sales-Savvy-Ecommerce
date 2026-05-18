import {
  Link,
  useNavigate
} from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();

  const currentUser =
    JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem(
      "currentUser"
    );

    alert(
      "Logout Successful"
    );

    navigate("/login");
  };

  return (

    <nav
      style={{
        backgroundColor: "#0f172a",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      <h1
        style={{
          color: "white"
        }}
      >
        Sales Savvy
      </h1>

      {
        currentUser && (

          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center"
            }}
          >

            <Link
              to="/"
              style={linkStyle}
            >
              Home
            </Link>

            <Link
              to="/products"
              style={linkStyle}
            >
              Products
            </Link>

            <Link
              to="/cart"
              style={linkStyle}
            >
              Cart
            </Link>

            <Link
              to="/orders"
              style={linkStyle}
            >
              Orders
            </Link>

            <button

              onClick={handleLogout}

              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "red",
                color: "white",
                cursor: "pointer"
              }}
            >

              Logout

            </button>

          </div>
        )
      }

    </nav>
  );
}

const linkStyle = {

  color: "white",

  textDecoration: "none",

  fontWeight: "bold"
};

export default Navbar;