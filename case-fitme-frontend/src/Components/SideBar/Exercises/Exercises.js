import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createExercise } from '../../Api/Exercise';
import ExerciseItem from './ExerciseItem';
import keycloak from '../../../Keycloak/keycloak';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL

const Exercises = () => {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);

/* Api fetch request with error handling. */
    useEffect(() => {
        const headers = { Authorization: `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/exercise`, {headers})
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
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    /* Method for creating. */
    const onSubmit = async (exercise) => {
        const [error, userResponse] = await createExercise(exercise)

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            window.location.reload();
        }
    }

    if (loading === true) {
        return null
    } else {
        return (
            <>
                <div className="content">
                    <h1>Exercises</h1>
                    <div className="items">
                        <div className='item none'>
                            <button onClick={handleAddExercise}>Create new exercise</button>
                        </div>

                        {/* Form that creates new exercise. */}
                        <form id='createExercise' onSubmit={handleSubmit(onSubmit)}>
                            <h1>Create new Exercise</h1>
                            <span className='close' onClick={handleClose}>X</span>
                            <input className='input-form' type="text" placeholder='Name' {...register("name")} />
                            <input className='input-form' type="text" placeholder='Description' {...register("description")} />
                            <input className='input-form' type="text" placeholder='Target muscle group' {...register("targetMuscleGroup")} />
                            <input className='input-form' type="text" placeholder='ImageURL' {...register("image")} />
                            <input className='input-form' type="text" placeholder='VideoLink' {...register("videoLink")} />
                            <br />
                            <div className='item none'>
                                {<button type="submit" value="Submit">Submit</button>}
                            </div>
                        </form>

                        {loading === false && apiData.map((data) => {
                            return (
                                <div key={data.id} >
                                    <ExerciseItem exercise={data} />
                                </div>)
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default Exercises;

/* Methods that styles specific id. */
const handleAddExercise = () => {
    document.getElementById("createExercise").style.display = "block";
}
const handleClose = () => {
    document.getElementById("createExercise").style.display = "none";
}

