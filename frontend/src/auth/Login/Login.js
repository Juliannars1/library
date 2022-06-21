import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Login.css';


async function loginUser(credentials) {
    return fetch('http://localhost:5000/api/signIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}
const Login = () => {
    const [email, setEmaillog] = useState(" ");
    const [passwordForm, setPasswordlog] = useState(" ");
    const [user, setUser] = useState("");

    let navigate = useNavigate();
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    }, [])
    const handleLogin = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            passwordForm
        });
        window.localStorage.setItem(
            'loggedNoteAppUser', JSON.stringify(token)
        )
        console.log(token)
        if (token.accessToken) return navigate('/home');
    }

    return user.id ? navigate('/home') : (
        <div className="form-div-Lg">
            <form className="form-primary" onSubmit={handleLogin} >
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control-input"
                        placeholder="Enter email"
                        onChange={(event) => setEmaillog(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control-input"
                        placeholder="Enter password"
                        onChange={(event) => setPasswordlog(event.target.value)}
                    />
                </div>

                <button type="submit" className="form-control-btn">
                    Login
                </button>

                <NavLink to='/register'>
                    Sign in now!
                </NavLink>
            </form>

        </div>
    );
}

export default Login;