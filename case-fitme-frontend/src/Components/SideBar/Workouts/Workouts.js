import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';
import WorkoutItem from "./WorkoutItem";

const apiUrl = process.env.REACT_APP_API_URL

const Workouts = () => {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    /* Api fetch request with error handling. */
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
            .then((data) => {
                setApiData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <h1>Workouts</h1>

            {loading === false && apiData.map((data) => {
                return (
                    <div key={data.id} >
                        <WorkoutItem workout={data} />
                    </div>)
            })}
        </>

    )
}
export default Workouts;
