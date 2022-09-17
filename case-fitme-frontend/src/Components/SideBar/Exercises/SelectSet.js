import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { deleteWorkout, updateWorkout } from '../../Api/Workout';
import { uppdateProgram } from '../../Api/Program';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

const WorkoutItem = ({ workout }) => {


    const [name, setName] = useState(workout.name);
    const [complete, setComplete] = useState(workout.complete);
    const [type, setType] = useState(workout.type);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);
    const [selectedProgramId, setSelectedProgramId] = useState(null);

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/program`, { headers })
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
                setSelectedProgramId(program[0])
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
        uppdateProgram(apiData, selectedProgramId, workout.id);
    }
    const handleProgramSelect = (event) => {
        setSelectedProgramId(event.target.value);
    }

    if (workout.id != null) {
        return (
            <>
                <div className='details-item'>
                    <div className="item" key={workout.id}>
                        <p>{workout.name}</p>
                        <span>
                            <button className='delete-btn' onClick={handleDelete}>Delete</button>
                            <select name="programs" className='select' id="programs" onChange={event => handleProgramSelect(event)}>
                                {apiData.map((program) => {
                                    return (
                                        <option value={program.id}>{program.name}</option>
                                    )
                                })}
                            </select>
                            <button onClick={handleAddToProgram}>Add</button>
                        </span>
                    </div>
                </div>

            </>
        )
    } 
}

export default WorkoutItem;

