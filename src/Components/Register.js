import React, { useState } from 'react'
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        state: "",
        country: "",
        address: "",
    })
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!input.name.trim()) {
            validationErrors.name = "name is required"
        }

        if (!input.email.trim()) {
            validationErrors.email = "email is required"
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            validationErrors.email = "email is not valid"
        }

        if (!input.password.trim()) {
            validationErrors.password = "password is required"
        } else if (input.password.length < 6) {
            validationErrors.password = "password should be at least 6 char"
        }

        if (input.confirmpassword !== input.password) {
            validationErrors.confirmpassword = "password not matched"
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
        }
        localStorage.setItem("user", JSON.stringify(input));
        // navigate("/login");
    }

    return (
        <div className="addUser">
            <h3>Register Page</h3>
            <form onSubmit={handleSubmit} className="addUserForm">
                <div className="inputGroup">
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={input.name}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                            autoComplete="off"
                            placeholder="Enter your name"
                        />
                        {errors.name && <span>{errors.name}</span>}
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                            placeholder="Enter your Email"
                        />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div><input
                        type="password"
                        id="password"
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter Password"
                    />
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <div> <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        value={input.confirmpassword}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter confirm password"
                    />
                        {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
                    </div>
                    <div> <input
                        type="text"
                        id="state"
                        name="state"
                        value={input.state}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter state"
                    />
                        {errors.name && <span>{errors.name}</span>}
                    </div>
                    <div>  <input
                        type="text"
                        id="country"
                        name="country"
                        value={input.country}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter country"
                    />
                        {errors.name && <span>{errors.name}</span>}
                    </div>
                    <div> <input
                        type="text"
                        id="address"
                        name="address"
                        value={input.address}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Enter address"
                    />
                        {errors.name && <span>{errors.name}</span>}
                    </div>
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
