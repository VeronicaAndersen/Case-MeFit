import React, { useEffect, useState } from 'react';

const Exercises = () => {

    const [apiData, setApiData] = useState([]);
    const api_url = `https://fitmecase.herokuapp.com/api/v1/exercise`
    useEffect(() => {
        fetch(api_url)
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
            <div className="content">
                <h1>Exercises</h1>
                <div className="items">
                    {apiData.map(data =>
                        <div className="item" key={data.id}>
                            <p>{data.name} </p>
                            <div>
                                <input type="number" min="1" placeholder="ex: 8" />
                                <button onClick={handleAddExer}>Add</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Exercises;

const handleAddExer = () => {
    alert("Added");
}