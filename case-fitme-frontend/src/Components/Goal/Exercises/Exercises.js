import React, { useEffect, useState } from 'react';

const Exercises = () => {

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch(`https://fitmecase.herokuapp.com/api/v1/exercise`)
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
                                <input className='input-number' type="number" min="1" placeholder="ex: 8" />
                                <button onClick={handleAddToWork}>Add</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Exercises;

const handleAddToWork = () => {
    alert("Added to workout");
}