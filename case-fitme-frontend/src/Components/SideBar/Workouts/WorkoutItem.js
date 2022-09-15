import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { deleteWorkout, updateWorkout } from '../../Api/Workout';


const WorkoutItem = ({ workout }) => {

    const { handleSubmit } = useForm()
    const [name, setName] = useState(workout.name);
    const [complete, setComplete] = useState(workout.complete);
    const [type, setType] = useState(workout.type);

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

    if (workout.id != null) {
        return (
            <>
                <div className='details-item'>
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

const handleAddToWork = () => {
    alert("Added to workout");
}
