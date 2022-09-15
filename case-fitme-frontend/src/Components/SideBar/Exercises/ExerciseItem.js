import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { deleteExercise, updateExercise } from '../../Api/Exercise';


const ExerciseItem = ({ exercise }) => {

    const { handleSubmit } = useForm()
    const [name, setName] = useState(exercise.name);
    const [targetMuscleGroup, setTargetMuscleGroup] = useState(exercise.targetMuscleGroup);
    const [description, setDescription] = useState(exercise.description);

    const onUpdate = () => {
        exercise.name = name;
        const newExercise = {
            name: name,
            description: exercise.description,
            targetMuscleGroup: exercise.targetMuscleGroup
        }
        updateExercise(exercise, exercise.id)
        document.getElementById("details").style.display = "none"
    }

    /* Methods that sets the value from the form. */
    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleTargetMuscleGroup = (event) => {
        setTargetMuscleGroup(event.target.value);
    }

    /* Deletes exercise with id. */
    const handleDelete = () => {
        deleteExercise(exercise.id);
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }

    if (exercise.id != null) {
        return (
            <>
                <div className='details-item'>
                    <div className="item" key={exercise.id}>
                        <p>{exercise.name}</p>
                        <span>
                            <button className='delete-btn' onClick={handleDelete}>Delete</button>
                            <button onClick={handleAddToWork}>Add</button>
                        </span>
                    </div>
                    
                    {/* Dispalys details for specific exercise. */}
                    <span className='details'>
                        <h3>Details</h3>
                        <p>Name: {exercise.name} </p>
                        <p>Description: {exercise.description}</p>
                        <p>Target Muscle Group: {exercise.targetMuscleGroup}</p>
                    </span>
                </div>

                {/* Form that updates exercise. */}
                <form className='updateForm' onSubmit={handleSubmit(onUpdate)}>
                    <div>
                        <input className='input-form' type="text" name="name" value={exercise.name} onChange={event => handleName(event)} />
                        <input className='input-form' type="text" name="description" value={exercise.description} onChange={event => handleDescription(event)} />
                        {/*<input className='input-form' type="text" name="targetMuscleGroup" value={exercise.targetMuscleGroup} onChange={event => handleTargetMuscleGroup(event)} />*/} {/* Contains null value. */}
                    </div>
                    <button className='save-btn' type="submit" onClick={onUpdate} value={exercise.id}>Save</button>
                </form>
            </>
        )
    }
}

export default ExerciseItem;

const handleAddToWork = () => {
    alert("Added to workout");
}
