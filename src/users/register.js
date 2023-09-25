import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [manager, setManager] = useState('N');

    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }



        try {
            const response = await fetch('http://localhost:8080/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    manager: manager,
                    password: password
                }),
            });
            const data = await response.json();

            if (response.ok) {
                alert('User created successfully');
                navigate('/login');
            } else {
                alert('Email has been used');
                throw new Error(data.message || 'Error creating user');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleManagerChange = (e) => {
        setManager(e.target.checked ? 'Y' : 'N');
    };

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




    return (
        <div className='container mt-4'>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control"  id="lastName" value={lastName} onChange={handleLastNameChange} />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="manager" checked={manager === 'Y'} onChange={handleManagerChange} />
                <label className="form-check-label" htmlFor="manager">Manager</label>
            </div>
            <button type="submit" className="btn btn-primary my-4">Register</button>
            </form>
        </div>
    );
}

export default Register;