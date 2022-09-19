import React, { useEffect, useState } from 'react';
const apiUrl = process.env.REACT_APP_API_URL

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
                return (
                    <div key={data.id} className="weekly-schedule archived-goal">
                        <div className="weekly-todo">
                            <p className="workout">{data.name}</p>
                            {<div>
                                <p className="type">{data.type}</p>

                            </div>}
                            <div className="circle" id='item-complete'></div>
                        </div>
                    </div>)
            }
            )}
        </>
    )
}
export default ArchivedGoals;

