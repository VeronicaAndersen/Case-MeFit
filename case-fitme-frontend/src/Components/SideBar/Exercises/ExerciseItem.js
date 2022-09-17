import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import keycloak from '../../../Keycloak/keycloak';
import { deleteExercise, updateExercise } from '../../Api/Exercise';
import DeleteExercise from './DeleteExercise';
import UpdateExercises from './UpdateExercise';
import SelectSet from '../Sets/SelectSet';
import { updateExerciseInSet } from '../../Api/Set';

const apiUrl = process.env.REACT_APP_API_URL

export default function ExerciseItem({ exercise }) {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
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
            .then((program) => {
                setApiData(program);
                setSelectedWorkoutId(program[0])
                setLoading(false);
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
                        <p>{exercise.category}</p>
                        <button>Details</button>
                    </span>
                    <span className='container-items'>
                        <DeleteExercise exercise={exercise} />
                        <select name="workouts" className='select' id="workouts" onChange={event => handleWorkoutSelect(event)}>
                            {apiData.map((workout) => {
                                return (
                                    <option key={workout.id} value={workout.id}>{workout.name}</option>
                                )
                            })}
                        </select>
                        <button >Add</button>
                    </span>
                </div>
                <UpdateExercises exercise={exercise} />
            </>
        )
    }
}

