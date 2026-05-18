import React,
{
  useState
} from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      email: "",

      password: ""
    });

  // HANDLE CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    });
  };

  // HANDLE LOGIN

  const handleLogin = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const validUser =
      users.find(

        (user) =>

          user.email ===
            formData.email &&

          user.password ===
            formData.password
      );

    if (validUser) {

      localStorage.setItem(

        "currentUser",

        JSON.stringify(validUser)
      );

      alert(
        "Login Successful"
      );

      navigate("/");

    } else {

      alert(
        "Invalid Credentials"
      );
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e2e8f0"
      }}
    >

      <form

        onSubmit={handleLogin}

        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          boxShadow:
            "0px 5px 15px rgba(0,0,0,0.2)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          Login 🔐
        </h1>

        <input

          type="email"

          name="email"

          placeholder="Enter Email"

          onChange={handleChange}

          required

          style={inputStyle}
        />

        <input

          type="password"

          name="password"

          placeholder="Enter Password"

          onChange={handleChange}

          required

          style={inputStyle}
        />

        <button
          style={buttonStyle}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center"
          }}
        >

          New User ?

          <Link to="/register">
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}

const inputStyle = {

  width: "100%",

  padding: "12px",

  marginBottom: "20px",

  borderRadius: "8px",

  border: "1px solid gray"
};

const buttonStyle = {

  width: "100%",

  padding: "12px",

  border: "none",

  borderRadius: "8px",

  backgroundColor: "#2563eb",

  color: "white",

  fontSize: "18px",

  cursor: "pointer"
};

export default Login;