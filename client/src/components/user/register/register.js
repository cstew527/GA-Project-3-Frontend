import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("https://project3-backend-jamie-chris.herokuapp.com/register", user)
            .then( res => {
                alert(res.data.message)
                // navigate("/all")
            })
        } else {
            alert("invalid input, please check your Info")
        }
        
    }

    return (
        <div className="container text-bg-dark mb-3">
            <h1>Register</h1>
            <form className="row g-3">
                {console.log("User", user)}
                <div className="col-md-4">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={user.name} placeholder="Your Name" id="name" onChange={handleChange}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={user.email} placeholder="Your Email" id="email" onChange={handleChange}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={user.password} placeholder="Your Password" id="password" onChange={handleChange}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="reEnterPassword" className="form-label">Re-enter Password</label>
                    <input type="password" className="form-control" value={user.reEnterPassword} placeholder="Re-enter Password" id="reEnterPassword" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Register
