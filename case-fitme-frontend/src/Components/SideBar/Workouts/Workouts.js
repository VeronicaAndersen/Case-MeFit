import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import keycloak from '../../../Keycloak/keycloak';
import { createWorkout } from "../../Api/Workout";
import WorkoutItem from "./WorkoutItem";

const apiUrl = process.env.REACT_APP_API_URL

const Workouts = () => {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/workout`, {headers})
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

    const onSubmit = async (workout) => {
        const [error, userResponse] = await createWorkout(workout)

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
                <h1>Workouts</h1>
                <div className="items">
                    <div className='item none'>
                        <button onClick={handleAddWorkout}>Create new Workout</button>
                    </div>
                    <form id='createWorkout' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Create new Workout</h1>
                        <span className='close' onClick={handleClose}>X</span>
                        <input className='input-form' type="text" placeholder='Name' {...register("name")} />
                        <input className='input-form' type="text" placeholder='Type' {...register("type")} />
                        <br />
                        <div className='item none'>
                            {<button type="submit" value="Submit">Submit</button>}
                        </div>
                    </form>
                    {loading === false && apiData.map((data) => {
                            return (
                                <div key={data.id} >
                                    <WorkoutItem workout={data} />
                                </div>)
                        })}
                </div>
            </>
        )
    }
}
export default Workouts;

const handleAddWorkout = () => {
    document.getElementById("createWorkout").style.display = "block";
}

const handleClose = () => {
    document.getElementById("createWorkout").style.display = "none";
}