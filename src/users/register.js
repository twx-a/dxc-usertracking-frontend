import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [manager, setManager] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("registered");
    };


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                <br/>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
                <br/>
                <label htmlFor="manager">Manager</label>
                <input type="checkbox" id="manager" value={manager} onChange={setManager} />
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;