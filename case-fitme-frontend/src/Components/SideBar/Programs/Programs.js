import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL

const Programs = () => {

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/program`)
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

    let navigate = useNavigate();
    async function handleGoToWork(event) {
        event.preventDefault();
        navigate("../workouts", { replace: true });
        // replace: true will replace the current entry in 
        // the history stack instead of adding a new one.
    }

    return (
        <>
            <h1>Programs</h1>
            <div className="items">
                <div className="item">
                    <p>There is no programs. Do you want to add some workouts?</p>
                    <button onClick={handleGoToWork}>Workouts</button>
                </div>
            </div>
            <div className="items">
                    {apiData.map(data =>
                        <div className="item" key={data.id}>
                            <p>{data.name} </p>
                        </div>
                    )}
                </div>
        </>
    )
}
export default Programs;