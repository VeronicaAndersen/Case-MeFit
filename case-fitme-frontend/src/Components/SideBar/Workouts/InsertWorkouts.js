import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createWorkout } from "../../Api/Workout";

export default function InsertWorkouts() {

    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);
    
    /* Method for creating. */
    const onSubmit = async (workout) => {
        const [error, userResponse] = await createWorkout(workout)

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            window.location.reload();
        }
    }

    return (
        <>
            <div className="items">
                <div className='item none'>
                    <button onClick={handleAddWorkout}>Create new Workout</button>
                </div>
                {/* Form that creates new workout. */}
                <form id='createWorkout' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Create new Workout</h1>
                    <span className='close' onClick={handleClose}>X</span>
                    <input className='input-form' type="text" placeholder='Name' {...register("name")} />
                        <input className='input-form' type="text" placeholder='Type' {...register("type")} />
                    <br />
                    <div className='item none'>
                        {<button category="submit" value="Submit">Submit</button>}
                    </div>
                </form>
            </div>
        </>
    )
}

/* Methods that styles specific id. */
const handleAddWorkout = () => {
    document.getElementById("createWorkout").style.display = "block";
}

const handleClose = () => {
    document.getElementById("createWorkout").style.display = "none";
}