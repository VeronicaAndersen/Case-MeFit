import React, { useEffect, useState } from 'react';
import keycloak from '../../../../Keycloak/keycloak';
import { useForm } from 'react-hook-form';
import { updateGoal } from '../../../Api/Goal';
import UpdateGoal from './UpdateGoal';

const apiUrl = process.env.REACT_APP_API_URL

const WeeklyLists = ({ goal }) => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/goal`, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}` },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((goal) => {
                setApiData(goal);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            {/* Prints out a list of all goals thats not have been acchieved. */}
            {apiData.map(goal => {
                if (goal.achieved === false) {
                    return (
                        <div>
                            <div key={goal.id} className="weekly-schedule">
                                <div className="weekly-todo">
                                    <p className="workout">{goal.goalName}</p>
                                    {<div>
                                        <p className="type">{goal.date}</p>
                                    </div>}
                                    <UpdateGoal goal={goal} />
                                    {/* <div className="circle"></div> */}
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}
export default WeeklyLists;