import React, { useEffect, useState } from 'react';
import { updateWorkoutInProgram } from '../../Api/Program';
import keycloak from '../../../Keycloak/keycloak';
import DeleteWorkout from './DeleteWorkouts';
import UpdateWorkout from './Updateworkouts';
import WorkoutDetails from './WorkoutDetails';

const apiUrl = process.env.REACT_APP_API_URL

export default function WorkoutItem ({ workout }) {

    const [apiData, setApiData] = useState([]);
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
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleAddToProgram = () => {
        updateWorkoutInProgram(apiData, selectedProgramId, workout.id);
    }
    const handleProgramSelect = (event) => {
        setSelectedProgramId(event.target.value);
    }

    if (workout.id != null) {
        return (
            <>
                <div className='container item' key={workout.id}>
                    <span className='container-items'>
                        <h3>{workout.name}</h3>
                        <p>{workout.category}</p>
                        <button onClick={showDetails}>Details</button>
                    </span>
                    <span className='container-items'>
                        <DeleteWorkout workout={workout} />
                        <button onClick={showEdit}>Edit</button>
                        <label>Program: </label>
                        <select name="programs" className='select' id="programs" onChange={event => handleProgramSelect(event)}>
                            {apiData.map((program) => {
                                return (
                                    <option key={program.id} value={program.id}>{program.name}</option>
                                )
                            })}
                        </select>
                        <button onClick={handleAddToProgram}>Add</button>
                    </span>
                </div>
                <WorkoutDetails workout={workout} />
                <UpdateWorkout workout={workout} />
            </>
        )
    }
}

const showDetails = () => {
    document.getElementById("work-detail").style.display = "block";
}
const showEdit = () => {
    document.getElementById("update-work").style.display = "block";
}