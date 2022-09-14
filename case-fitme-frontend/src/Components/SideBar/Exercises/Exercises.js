import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createExercise } from '../../Api/Exercise';

const apiUrl = process.env.REACT_APP_API_URL

var counter = 0;
const Exercises = () => {
    const [apiData, setApiData] = useState([]);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);




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
                    <div className='item none'>
                        <button onClick={handleAddExercise}>Create new exercise</button>
                    </div>

                    <form id='createExercise' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Create new Exercise</h1>
                        <span className='close' onClick={handleClose}>X</span>
                        <input className='input-form' type="text" placeholder='Name' {...register("name")} />
                        <input className='input-form' type="text" placeholder='Description' {...register("description")} />
                        <input className='input-form' type="text" placeholder='Target muscle group' {...register("targetMuscleGroup")} /> 
                        <input className='input-form' type="text" placeholder='ImageURL' {...register("image")} />
                        <input className='input-form' type="text" placeholder='VideoLink' {...register("videoLink")} />

                        {/* <input type="checkbox" id="css" name="achieved" value="true" {...register("achieved")} />
                            <label for="achieved">Achieved</label><br></br> */}
                        <br/>
                        <div className='item none'>
                            {<button type="submit" value="Submit">Submit</button>}
                        </div>
                    </form>
                    {apiData.map((data) => {
                        if (data.id != null) {

                            counter++;
                            return (
                                <div className="item" key={data.id}>
                                    <p>{data.name} </p>
                                    <div className='details' id={data.id}>
                                        <p>{data.description}</p>
                                        <p>{data.targetMuscleGroup}</p>
                                        <img src={data.image} alt="img" />
                                    </div>
                                    <div>
                                        <input className='input-number' type="number" min="1" placeholder="ex: 8" />
                                        <span>
                                            <button value={data.id}>Details</button>
                                            <button value={data.id}>Delete</button>
                                            <button value={data.id}>Edit</button>
                                            <button onClick={handleAddToWork}>Add</button>
                                        </span>
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
            </div>
        </>
    )
}
export default Exercises;

const handleAddToWork = () => {
    alert("Added to workout");
}
const handleAddExercise = () => {
    document.getElementById("createExercise").style.display = "block";
}
const handleClose = () => {
    document.getElementById("createExercise").style.display = "none";
}

