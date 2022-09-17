import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createSet } from '../../Api/Set';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export default function InsertSets () {

    const [ setApiData] = useState([]);
    const { register, handleSubmit } = useForm();
    const [ setApiError] = useState(null);

    /* Api fetch request with error handling. */
    useEffect(() => {
        const headers = { Authorization: `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/set`, { headers, crossDomain: true })
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

    /* Method for creating. */
    const onSubmit = async ({setExerciseRepetition}) => {
        console.log(setExerciseRepetition);
        const set = {
            exerciseRepetition: setExerciseRepetition
        }
        const [error, userResponse] = await createSet(set)

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            //console.log(set);
            //window.location.reload();
        }
    }

    return (
        <>
            <div className="items">
                <div className='item none'>
                    <button onClick={handleAddSet}>Create new set</button>
                </div>

                {/* Form that creates new set. */}
                <form id='createSet' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Create new Set</h1>
                    <span className='close' onClick={handleClose}>X</span>
                    <input className='input-form' type="number" placeholder='Repetition ex. 8' {...register("setExerciseRepetition")} />
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
const handleAddSet = () => {
    document.getElementById("createSet").style.display = "block";
}
const handleClose = () => {
    document.getElementById("createSet").style.display = "none";
}

