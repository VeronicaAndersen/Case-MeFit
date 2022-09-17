import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';
import DeleteExercise from './DeleteExercise';
import UpdateExercises from './UpdateExercise';
import ExerciseDetails from './ExerciseDetails';

const apiUrl = process.env.REACT_APP_API_URL

export default function ExerciseItem({ exercise }) {

    const [apiData, setApiData] = useState([]);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

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
                setApiData(workout);
                setSelectedWorkoutId(workout[0])
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleWorkoutSelect = (event) => {
        setSelectedWorkoutId(event.target.value);
    }


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
                        <select name="workouts" className='select' id="workouts" onChange={event => handleWorkoutSelect(event)}>
                            {apiData.map((workout) => {
                                return (
                                    <option key={workout.id} value={workout.id}>{workout.name}</option>
                                )
                            })}
                        </select>
                        <button className='add-btn' >Add</button>
                    </span>
                </div>
                <ExerciseDetails exercise={exercise} />
                <UpdateExercises exercise={exercise}/>
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