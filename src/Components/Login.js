import React, { useState } from 'react'
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    password: "",
  })

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedin = JSON.parse(localStorage.getItem("user"));
    if (input.email === loggedin.email && input.password === loggedin.password) {
      navigate("/");
    }
    else {
      alert("invalid name or Password");
    }
  }
  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form onSubmit={handleLogin} className="addUserForm">
        <div className="inputGroup">
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            autoComplete="off"
            placeholder="Enter your email"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            autoComplete="off"
            placeholder="Enter your Password"
          />
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have Account? </p>
        <Link to="/register" type="submit" class="btn btn-success">
          Register
        </Link>
      </div>
    </div>
  )
}

export default Login
