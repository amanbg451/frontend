import React, { useState } from 'react'
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword:"",
        state: "",
        country: "",
        address: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    }

    return (
        <div className="addUser">
            <h3>Register Page</h3>
            <form onSubmit={handleSubmit} className="addUserForm">
                <div className="inputGroup">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={input.name}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter your name"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        placeholder="Enter your Email"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter Password"
                    />
                    <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        value={input.confirmpassword}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter confirm password"
                    />
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={input.state}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter state"
                    />
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={input.country}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter country"
                    />
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={input.address}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter address"
                    />
                    <button type="submit" class="btn btn-success">
                        Sign Up
                    </button>
                </div>
            </form>
            <div className="login">
                <p>Already have an Account? </p>
                <Link to="/login" type="submit" class="btn btn-primary">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Register
