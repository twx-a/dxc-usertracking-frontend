import react from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../context/UserContext.js';

const NavBar = () => {
    const ctx = react.useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 justify-content-between">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/dashboard" class="nav-link">Dashboard</Link>
                </li>
                {!ctx.isLoggedIn && 
                    <li class="nav-item">
                        <Link to="/register" class="nav-link">Register</Link>
                    </li>
                }
                {!ctx.isLoggedIn &&
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">Login</Link>
                    </li>
                }
            </ul>
            <span class="navbar-text">
                {ctx.isLoggedIn &&  <button class="btn btn-danger" onClick={ctx.onLogout}>Logout</button>}
            </span>
        </nav>
    );
}

export default NavBar;