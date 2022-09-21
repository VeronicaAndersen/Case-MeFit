import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createExercise } from "../../Api/Exercise";

export default function InsertExercises() {

    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);

    /* Method for creating new exercise. */
    const onSubmit = async (exercise) => {
        const [error, userResponse] = await createExercise(exercise)
        const newExercise = {
            name: exercise
        }

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            console.log(exercise);
            //window.location.reload();
        }
    }
    /* Prints out a form with input fields for exercises. */
    return (
        <>
            <div className="items">
                <div className='item none'>
                    <button onClick={handleAddExercise}>Create new Exercise</button>
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
            </div>
        </>
    )
}

/* Methods that styles specific id. */
const handleAddExercise = () => {
    document.getElementById("createExercise").style.display = "block";
}

const handleClose = () => {
    document.getElementById("createExercise").style.display = "none";
}