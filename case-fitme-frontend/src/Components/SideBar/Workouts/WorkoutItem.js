import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { deleteWorkout, updateWorkout } from '../../Api/Workout';


const WorkoutItem = ({ workout }) => {

    const [apiError, setApiError] = useState(null);
    const { handleSubmit, formState: { errors } } = useForm()
    const [name, setName] = useState(workout.name);
    const [complete, setComplete] = useState(workout.complete);
    const [type, setType] = useState(workout.type);

    var counter = 0;
    const onUpdate = () => {
        workout.name = name;
        const newWorkout = {
            name: name,
            type: workout.type,
            complete: workout.complete
        }
        updateWorkout(workout, workout.id)
        document.getElementById("details").style.display = "none"
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleDescription = (event) => {
        setType(event.target.value);
    }

    const handleTargetMuscleGroup = (event) => {
        setComplete(event.target.value);
    }

    const handleDelete = () => {
        deleteWorkout(workout.id);
    }

    if (workout.id != null) {
        return (
            <>
                <div className="item" key={workout.id}>
                    <p>{workout.name}</p>

                    <div>
                        <input className='input-number' type="number" min="1" placeholder="ex: 8" />
                    </div>
                    <span>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleAddToWork}>Add</button>
                    </span>
                </div>
                <form onSubmit={handleSubmit(onUpdate)}>
                    <input className='input-form' type="text" name="name" value={name} onChange={event => handleName(event)} />
                    <div id={workout.id}>
                        <input className='input-form' type="text" name="type" value={type} onChange={event => handleDescription(event)} />
                        <input className='input-form' type="text" name="complete" value={complete} onChange={event => handleTargetMuscleGroup(event)} />
                    </div>
                    <button type="submit" onClick={onUpdate} value={workout.id}>Save</button>
                </form>
            </>
        )
    } else if (counter === 0) {
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

const handleAddToWork = () => {
    alert("Added to workout");
}
