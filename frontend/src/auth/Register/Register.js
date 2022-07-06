import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Register.css';

async function registerUser(credentials) {
    return fetch('http://localhost:5000/api/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cardId, setCardId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [roles, setRoles] = useState("ADMIN");

    let navigate = useNavigate();
    const handleFormSubmit = async(e) => {
        e.preventDefault();
            const user = await registerUser({
                name,
                email,
                password,
                cardId,
                phoneNumber,
                roles
            });
            window.localStorage.setItem(
                'user', JSON.stringify(user)
            )
            if (user.accessToken) return navigate('/home');        
    }
    return (
        <>
            <div className="form-div-Rg">
                <form className="form-primary" onSubmit={handleFormSubmit}>
                    <h3>Register</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control-input"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control-input"
                            placeholder="Enter Full Name"
                            name="name"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tarjeta de Id</label>
                        <input
                            type="text"
                            className="form-control-input"
                            placeholder="Enter Number ID"
                            name="cardId"
                            onChange={(event) => setCardId(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className="form-control-input"
                            placeholder="Enter Phone Number"
                            name="phoneNumber"
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Role</label>
                        <select
                            className="form-control-input"
                            name="roles"
                            value={ roles }
                            onChange={(event) => setRoles(event.target.value)}
                        >
                            <option value="ADMIN">ADMIN</option>
                            <option value="USER">USER</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control-input"
                            placeholder="Enter password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="form-control-btn">
                        Register
                    </button>
                    <NavLink to='/login'>
                        Already registered log in?
                    </NavLink>
                </form>

            </div>

        </>
    )
}

export default Register;