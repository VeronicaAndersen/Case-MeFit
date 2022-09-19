import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createProgram } from "../../Api/Program";

export default function InsertPrograms() {

    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);
    
    /* Method for creating new program. */
    const onSubmit = async (program) => {
        const [error, userResponse] = await createProgram(program)

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            window.location.reload();
        }
    }
/* Prints out a form with input fields for program. */
    return (
        <>
            <div className="items">
                <div className='item none'>
                    <button onClick={handleAddProgram}>Create new Program</button>
                </div>
                {/* Form that creates new program. */}
                <form id='createProgram' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Create new Program</h1>
                    <span className='close' onClick={handleClose}>X</span>
                    <input className='input-form' category="text" placeholder='Name' {...register("name")} />
                    <input className='input-form' category="text" placeholder='Category' {...register("category")} />
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
const handleAddProgram = () => {
    document.getElementById("createProgram").style.display = "block";
}

const handleClose = () => {
    document.getElementById("createProgram").style.display = "none";
}