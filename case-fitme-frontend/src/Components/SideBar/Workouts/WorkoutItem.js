import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { deleteWorkout, updateWorkout } from '../../Api/Workout';
import { uppdateProgram } from '../../Api/Program';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

const WorkoutItem = ({ workout, program }) => {


    const [name, setName] = useState(workout.name);
    const [complete, setComplete] = useState(workout.complete);
    const [type, setType] = useState(workout.type);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/workout`, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((program) => {
                setApiData(program);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const onUpdate = () => {
        workout.name = name;
        const newWorkout = {
            name: name,
            type: workout.type,
            complete: workout.complete
        }
        updateWorkout(workout, workout.id)
        setTimeout(function () {
            window.location.reload();
        }, 5000);
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleType = (event) => {
        setType(event.target.value);
    }

    const handleComplete = (event) => {
        setComplete(event.target.value);
    }

    const handleDelete = () => {
        deleteWorkout(workout.id);
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }

    const handleAddToProgram = () => {
        uppdateProgram(1, workout)
    }


    if (workout.id != null) {
        return (
            <>
                <div className='details-item'>
                    <div className="item" key={workout.id}>
                        <p>{workout.name}</p>
                        <span>
                            <button onClick={handleDelete}>Delete</button>

                            <select name="programs" id="programs">
                                {apiData.map((program) => {
                                    //console.log(program);
                                    return (
                                        <option value={program.id}>{program.name}</option>
                                    )
                                })}
                            </select>
                            <button onClick={handleAddToProgram}>Add</button>
                        </span>
                    </div>
                    <span className='details'>
                        <h3>Details</h3>
                        <p>Name: {workout.name} </p>
                        <p>Type: {workout.type}</p>
                    </span>
                </div>
                <form onSubmit={handleSubmit(onUpdate)}>
                    <input className='input-form' type="text" name="name" value={name} onChange={event => handleName(event)} />
                    <div id={workout.id}>
                        <input className='input-form' type="text" name="type" value={type} onChange={event => handleType(event)} />
                        <input className='input-form' type="text" name="complete" value={complete} onChange={event => handleComplete(event)} />
                    </div>
                    <button type="submit" onClick={onUpdate} value={workout.id}>Save</button>
                </form>
            </>
        )
    } else {
        return (
            <div className="weekly-schedule" key="0">
                <div className="weekly-todo">
                    <p>No archived yet!</p>
                </div>
            </div>
        )
    }
}

export default WorkoutItem;

