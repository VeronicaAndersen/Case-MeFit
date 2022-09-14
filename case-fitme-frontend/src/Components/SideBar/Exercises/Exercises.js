import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createExercise } from '../../Api/Exercise';

const apiUrl = process.env.REACT_APP_API_URL

var counter = 0;
const Exercises = () => {
    const [apiData, setApiData] = useState([]);
    const { register, handleSubmit } = useForm()
    const [apiError, setApiError] = useState(null)

    useEffect(() => {
        fetch(`${apiUrl}/exercise`)
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


    const onSubmit = async (exercise) => {
        const [error, userResponse] = await createExercise(exercise)

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            window.location.reload();
        }
    }
    return (
        <>
            <div className="content">
                <h1>Exercises</h1>
                <div className="items">

                    {apiData.map((data) => {
                        if (data.id != null) {

                            counter++;
                            return (
                                <div className="item" key={data.id}>
                                    <p>{data.name} </p>
                                    <div>
                                        <input className='input-number' type="number" min="1" placeholder="ex: 8" />
                                        <button onClick={handleAddToWork}>Add</button>
                                    </div>
                                </div>
                            )
                        } else if (counter === 0) {
                            return (
                                <div className="weekly-schedule" key="0">
                                    <div className="weekly-todo">
                                        <p>No archived yet!</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='input-form' type="text" placeholder='Name' {...register("name")} />
                    <input className='input-form' type="text" placeholder='Description' {...register("description")} />
                    <input className='input-form' type="text" placeholder='Target muscle group' {...register("target_muscle_group")} /><br />
                    {<input type="submit" value="Submit" />}
                </form>
            </div>
        </>
    )
}
export default Exercises;

const handleAddToWork = () => {
    alert("Added to workout");
}