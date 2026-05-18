import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />

        {/* HOME */}

        <Route

          path="/"

          element={

            <ProtectedRoute>

              <Home />

            </ProtectedRoute>
          }
        />

        {/* PRODUCTS */}

        <Route

          path="/products"

          element={

            <ProtectedRoute>

              <Products />

            </ProtectedRoute>
          }
        />

        {/* CART */}

        <Route

          path="/cart"

          element={

            <ProtectedRoute>

              <Cart />

            </ProtectedRoute>
          }
        />

        {/* ORDERS */}

        <Route

          path="/orders"

          element={

            <ProtectedRoute>

              <Orders />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;