import react from 'react';
import {Link} from 'react-router-dom';
import styles from './navbar.module.css';
import UserContext from '../context/UserContext.js';

const NavBar = () => {
    const ctx = react.useContext(UserContext);
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {ctx.isLoggedIn && 
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                }
                {!ctx.isLoggedIn && 
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                }
                {!ctx.isLoggedIn &&
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default NavBar;