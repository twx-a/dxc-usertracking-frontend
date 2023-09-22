import React, { useState } from 'react';

const UserContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {},
    firstName: '',
    lastName: '',
});

export const UserContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    const loginHandler = (firstName, lastName) => {
        setIsLoggedIn(true);
        setFirstName(firstName);
        setLastName(lastName);
    };

    const contextValue = {
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        firstName: firstName,
        lastName: lastName,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
