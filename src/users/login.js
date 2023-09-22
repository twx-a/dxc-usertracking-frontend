import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ctx = useContext(UserContext);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log("loggedin");
        const firstName = 'John';
        const lastName = 'Doe';
        ctx.onLogin(firstName, lastName);
        console.log(ctx.isLoggedIn);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;