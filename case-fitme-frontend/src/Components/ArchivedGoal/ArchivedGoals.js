import React, { useEffect, useState } from 'react';
const apiUrl = process.env.REACT_APP_API_URL
var counter = 0;
const ArchivedGoals = () => {

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
    }, [])

    return (
        <>
            <h1>Archived Goals</h1>

            {apiData.map((data) => {
                if (data.complete === true) {
                    counter++;
                    return (
                        <div key={data.id} className="weekly-schedule">
                            <div className="weekly-todo">
                                <p className="workout">{data.name}</p>
                                {<div>
                                    <p className="type">{data.type}</p>

                                </div>}
                                <div className="circle" id='item-complete'></div>
                            </div>
                        </div>)
                }else if (counter === 0) {
                    return (
                        <div className="weekly-schedule" key="0">
                            <div className="weekly-todo">
                                <p>No archived yet!</p>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}
export default ArchivedGoals;

