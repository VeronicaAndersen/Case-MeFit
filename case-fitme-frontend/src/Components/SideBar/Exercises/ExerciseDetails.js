import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export default function ProgramDetails({exercise}) {

    const [apiData, setApiData] = useState([]);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/exercise`, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((exercise) => {
                setApiData(exercise);
                setSelectedWorkoutId(exercise[0])
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return(
        <>
        <div className='card' id='exer-detail'>
                    <h3>Details</h3>
                    <img src={exercise.image} alt="training-pic" />
                    <figcaption>
                        <p>{exercise.name}</p>
                        <p>{exercise.category}</p>
                    </figcaption>
                </div>
        </>
    )
}