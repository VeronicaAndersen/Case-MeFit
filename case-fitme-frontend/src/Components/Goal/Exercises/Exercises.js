import React, { useEffect } from 'react';

const Exercises = () => {

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
            .then((actualData) => console.log(actualData))
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <div className="content">
                <h1>Exercises</h1>
                <div className="items">
                    <div className="item">
                        <p>Item</p>
                        <div>
                            <input type="number" min="1" placeholder="ex: 8" />
                            <button onClick={handleAddExer}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Exercises;

const handleAddExer = () => {
    alert("Added");
}