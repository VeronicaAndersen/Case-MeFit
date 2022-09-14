import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

var counter = 0;
const apiUrl = process.env.REACT_APP_API_URL
const Workouts = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/workout`)
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
                {apiData.map((data) => {
                    if (data.complete === true || data.complete === false) {
                        counter++;
                        return (
                            <div className="item" key={data.id}>
                                <p>{data.name} </p>
                                <button key={data.id} onClick={handleAddToProg}>Add</button>
                            </div>
                        )
                    }
                    if (counter === 0) {
                        return (
                            <div className="item">
                                <p>There is no workouts. Do you want to add some exercises?</p>
                                <button onClick={handleGoToExer}>Exercise</button>
                            </div>
                        )
                    }
                })}


            </div>
        </>
    )
}
export default Workouts;

const handleAddToProg = () => {
    alert("Added to Program");
}