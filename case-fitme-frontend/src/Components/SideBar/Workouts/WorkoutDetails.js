import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export default function WorkoutDetails({workout}) {

    const [apiData, setApiData] = useState([]);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

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
        <div className='card' id='work-detail'>
                    <h3>Details</h3>
                        <p>{workout.name}</p>
                        <p>{workout.type}</p>
                </div>
        </>
    )
}