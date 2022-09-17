import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export default function ProgramDetails({program}) {

    const [apiData, setApiData] = useState([]);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/program`, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((program) => {
                setApiData(program);
                setSelectedWorkoutId(program[0])
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return(
        <>
        <div className='card' id='prog-detail'>
                    <h3>Details</h3>
                        <p>{program.name}</p>
                        <p>{program.category}</p>
                </div>
        </>
    )
}