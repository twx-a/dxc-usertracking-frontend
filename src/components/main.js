import React from 'react';
import UserContext from '../context/UserContext';

const Main = () => {
    const ctx = React.useContext(UserContext);

    return (
        <div>
        <h1>Home</h1>
        <p>Home page body content</p>
        {console.log(ctx.isLoggedIn)}
        {ctx.isLoggedIn &&  <button onClick={ctx.onLogout}>Logout</button>}
        </div>
    );
}


export default Main;