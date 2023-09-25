import react from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../context/UserContext.js';

const NavBar = () => {
    const ctx = react.useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 justify-content-between">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                {!ctx.isLoggedIn && 
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                }
                {!ctx.isLoggedIn &&
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                }
            </ul>
            <span className="navbar-text">
                {ctx.isLoggedIn &&  <button className="btn btn-danger" onClick={ctx.onLogout}>Logout</button>}
            </span>
        </nav>
    );
}

export default NavBar;