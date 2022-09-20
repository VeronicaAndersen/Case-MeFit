import React, { useEffect, useState } from 'react';
import keycloak from '../../../../Keycloak/keycloak';
import { useForm } from 'react-hook-form';
import { updateGoal } from '../../../Api/Goal';

const apiUrl = process.env.REACT_APP_API_URL

const WeeklyLists = ({ goal }) => {

    const [apiData, setApiData] = useState([]);
    const { handleSubmit } = useForm();
    const [name, setName] = useState(goal.name);
    const [achieved, setComplete] = useState(goal.achieved);

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
            .then((data) => {
                setApiData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    /* Method that updates workouts. */
    const onUpdate = () => {
        const newWorkout = {
            achieved: goal.achieved
        }
        updateGoal(goal, goal.id)
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
    const handleComplete = (event) => {
        setComplete(event.target.value);
    }
    return (
        <>
        {/* Prints out a list of all goals thats not have been acchieved. */}
            {apiData.map(data => {
                if (data.achieved === false) {
                    return (
                        <div key={data.id} className="weekly-schedule">
                            <div className="weekly-todo">
                                <p className="workout">{data.goalName}</p>
                                {<div>
                                    <p className="type">{data.date}</p>

                                </div>}
                                <div className="circle" key={data.id}></div>
                                <form onSubmit={handleSubmit(onUpdate)}>
                                    <input className='input-form' type="text" name="achieved" value={achieved} onChange={event => handleComplete(event)} />
                                    <button type="submit">achieved</button>
                                </form>
                            </div>
                        </div>)
                }
            })}
        </>
    )
}
export default WeeklyLists;