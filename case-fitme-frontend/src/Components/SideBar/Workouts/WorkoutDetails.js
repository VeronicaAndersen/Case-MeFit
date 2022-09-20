import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export default function WorkoutDetails({workout}) {

    const [apiData, setApiData] = useState([]);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

    /* Workout api fetch request with error handling. */
    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/workout`, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((workout) => {
                setApiData(workout);
                setSelectedWorkoutId(workout[0])
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return(
        <>
        {/* Prints out details about wprokuts.*/}
        <div className='card' id='work-detail'>
                    <h3>Details</h3>
                        <h4>{workout.name}</h4>
                        <p>{workout.type}</p>
                </div>
        </>
    )
}