import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const Dashboard = () => {

    const ctx = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [onlyShowManager, setOnlyShowManager] = useState(false);

    //fetch all users & set users state.
    useEffect(() => {
        fetch('http://localhost:8080/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log('Error fetching data:', error));
    },[]);

    //take users state and filter it based on search and showManager state.
    const filteredUsers = users.filter((user) => {
        const userSearch = 
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.firstName.toLowerCase().includes(search.toLowerCase()) ||
            user.lastName.toLowerCase().includes(search.toLowerCase()); 
        
        //if onlyShowManager is true, only show users that are managers.
        return userSearch && (user.manager === 'Y' || !onlyShowManager );
    });

    return (
        <div className="container mt-4">
            <h1>Users</h1>
            <p>Hello {ctx.firstName +" "+ ctx.lastName}</p>
            <p>There are a total of {users.length} users.</p>
            {ctx.isLoggedIn && 
                <input
                    type="text"
                    placeholder="Search for registered users"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            }
            <br/>
            {ctx.isLoggedIn && 
                <input 
                    type="checkbox" 
                    className="form-check-input"
                    id="manager"
                    checked={onlyShowManager} 
                    onChange={(e) => setOnlyShowManager(e.target.checked)}
                />
            }
            {ctx.isLoggedIn && 
                <label className="form-check-label" htmlFor="manager">Show only managers</label>
            }
            <div className="row">
                {filteredUsers.map((user) => {
                    return (
                    <div className ="col-4" key={user.id}>
                        <div className='card mt-4' key={user.id}>
                            <div className='card-body'>
                                <p className="card-title">Name: {user.firstName} {user.lastName}</p>
                                <p className="card-text">Email: {user.email}</p>
                                <p className="card-text">Manager: {user.manager}</p>
                            </div>
                        </div>
                    </div>
                    );
                })
                }
            </div>
        </div>
    );
}

export default Dashboard;