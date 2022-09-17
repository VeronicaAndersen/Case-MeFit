import InsertPrograms from "./InsertPrograms";
import ProgramItem from "./ProgramItem";
import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export default function Programs({ program }) {

    const [apiData, setApiData] = useState([]);

    /* Api fetch request with error handling. */
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
            .then((data) => {
                setApiData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <>
            <h1>Programs</h1>
            <InsertPrograms />
            {apiData.map((data) => {
                return (
                    <div key={data.id} >
                        <ProgramItem program={data} />
                    </div>)
            })}
        </>
    )
}