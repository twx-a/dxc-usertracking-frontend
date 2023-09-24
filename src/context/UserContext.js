import React, { useState } from 'react';

const UserContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {},
    firstName: '',
    lastName: '',
    isManager: false
});

export const UserContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isManager, setIsManager] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    const loginHandler = (firstName, lastName, isManager) => {
        setIsLoggedIn(true);
        setFirstName(firstName);
        setLastName(lastName);
        setIsManager(isManager);
    };

    const contextValue = {
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        firstName: firstName,
        lastName: lastName,
        isManager: isManager
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
