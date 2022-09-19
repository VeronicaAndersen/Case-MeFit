import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export default function ProgramDetails({ program }) {

    const [apiData, setApiData] = useState([]);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

    /* Api fetch for programs with error handling. */
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

    return (
        <>
            {/* Prints out details about Programs.*/}
            <div className='card' id='prog-detail'>
                <h3>Details</h3>
                <h4>{program.name}</h4>
                <p>{program.category}</p>
            </div>
        </>
    )
}