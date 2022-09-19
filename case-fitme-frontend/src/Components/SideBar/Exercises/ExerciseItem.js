import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';
import DeleteExercise from './DeleteExercise';
import UpdateExercises from './UpdateExercise';
import ExerciseDetails from './ExerciseDetails';
import { updateExerciseSet } from '../../Api/Exercise';
import { updateSetInWorkout } from '../../Api/Workout';

const apiUrl = process.env.REACT_APP_API_URL

export default function ExerciseItem({ exercise }) {

    const [apiSetData, setApiSetData] = useState([]);
    const [selectedSetId, setSelectedSetId] = useState(null);
    const [apiWorkoutData, setApiWorkoutData] = useState([]);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

    /* Set api fetch request with error handling. */
    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/set`, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((set) => {
                setApiSetData(set);
                setSelectedSetId(set[0].id)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleAddToSet = () => {
        updateExerciseSet(apiSetData, selectedSetId, exercise.id);
    }
    const handleSetSelect = (event) => {
        setSelectedSetId(event.target.value);
    }

    /* Workout api fetch request with error handling. */
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
            .then((workout) => {
                setApiWorkoutData(workout);
                setSelectedWorkoutId(workout[0])
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleWorkoutSelect = (event) => {
        setSelectedWorkoutId(event.target.value);
    }
    const handleAddToWorkout = () => {
        handleAddToSet();
        console.log(apiWorkoutData.id);
        updateSetInWorkout(apiWorkoutData, apiWorkoutData.id, selectedSetId);
    }
    /* Prints out Exercises with selections boxes for set & workout.*/
    if (exercise.id != null) {
        return (
            <>
                <div className='container item' key={exercise.id}>
                    <span className='container-items'>
                        <h3>{exercise.name}</h3>
                        <button onClick={showDetails}>Details</button>
                    </span>
                    <span className='container-items'>
                        <DeleteExercise exercise={exercise} />
                        <button onClick={showEdit}>Edit</button>
                        <label>Set: </label>
                        <select name="sets" className='select' id="sets" onChange={event => handleSetSelect(event)}>
                            {apiSetData.map((set) => {
                                return (
                                    <option key={set.id} value={set.id}>{set.exerciseRepetition}</option>
                                )
                            })}
                        </select>

                        <label>Workout: </label>
                        <select name="workouts" className='select' id="workouts" onChange={event => handleWorkoutSelect(event)}>
                            {apiWorkoutData.map((workout) => {
                                return (
                                    <option key={workout.id} value={workout.id}>{workout.name}</option>
                                )
                            })}
                        </select>
                        <button onClick={handleAddToWorkout} className='add-btn' >Add</button>
                    </span>
                </div>
                <ExerciseDetails exercise={exercise} />
                <UpdateExercises exercise={exercise} />
            </>
        )
    }
}

const showDetails = () => {
    document.getElementById("exer-detail").style.display = "block";
}
const showEdit = () => {
    document.getElementById("update-exer").style.display = "block";
}