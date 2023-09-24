import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ctx = useContext(UserContext);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        try {
            const response = await fetch('http://localhost:8080/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });
            const data = await response.json();

            if (response.ok) {
                alert('Logged in Successfully');
                ctx.onLogin(data.firstName, data.lastName, (data.manager === 'Y' ? true : false));
                navigate('/dashboard');
            } else {
                alert('Wrong Email or password. Please try again.');
                throw new Error(data.message || 'Login Failed');
            }
        } catch (err) {
            console.log(err.message);
        }
    };


    return (
        <div class='container mt-4'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit" class="btn btn-primary my-4">Register</button>
            </form>
        </div>
    );
}

export default Login;