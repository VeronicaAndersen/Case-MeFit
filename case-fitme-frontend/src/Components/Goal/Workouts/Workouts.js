import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Workouts = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch(`https://fitmecase.herokuapp.com/api/v1/workout`)
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
    async function handleGoToExer(event) {
        event.preventDefault();
        navigate("../exercise", { replace: true });
        // replace: true will replace the current entry in 
        // the history stack instead of adding a new one.
    }
    return (
        <>
                <h1>Workouts</h1>
                <div className="items">
                    <div className="item">
                        <p>There is no workouts. Do you want to add some exercises?</p>
                        <button onClick={handleGoToExer}>Go to Exercise</button>
                    </div>
                {apiData.map(data =>
                        <div className="item" key={data.id}>
                            <p>{data.name} </p>
                        </div>
                    )}
                </div>
        </>
    )
}
export default Workouts;

