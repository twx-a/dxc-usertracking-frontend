import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import styles from './main.module.css';

const Main = () => {
    const [users, setUsers] = useState([]);
    ChartJS.register(ArcElement, Tooltip, Legend);

    const handleGetUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                throw new Error(data.message || 'Error fetching users.');
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    handleGetUsers();

    const numManagers = users.filter(user => user.manager === 'Y').length;
    const numEmployees = users.length - numManagers;

    return (
        <div className="container mt-4">
            <h1>Home</h1>
            <p>Welcome. Login or Register to get started!</p>
            <p>There's currently a total of {users.length} users that are registered</p>
            <div className="d-flex justify-content-center">
                <div className={styles.chartContainer}>
                    <Doughnut
                        data={{
                            labels: [numManagers + ' Managers', numEmployees + ' Employees'],
                            datasets: [
                                {
                                    label: 'User Roles',
                                    data: [numManagers, numEmployees],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)'
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    );
}


export default Main;