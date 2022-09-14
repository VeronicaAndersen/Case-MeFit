import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { deleteExercise, updateExercise } from '../../Api/Exercise';


const ExerciseItem = ({ exercise }) => {

    const [apiError, setApiError] = useState(null);
    const { handleSubmit, formState: { errors } } = useForm()
    const [name, setName] = useState(exercise.name);
    const [targetMuscleGroup, setTargetMuscleGroup] = useState(exercise.targetMuscleGroup);
    const [description, setDescription] = useState(exercise.description);

    var counter = 0;
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

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }
    const handleTargetMuscleGroup = (event) => {
        setTargetMuscleGroup(event.target.value);
    }

    const handleDelete = () => {
        deleteExercise(exercise.id);
    }

    if (exercise.id != null) {
        return (
            <>
                <div className="item" key={exercise.id}>
                    <p>{exercise.name}</p>
                    <form onSubmit={handleSubmit(onUpdate)} id="details">
                        <input className='input-form' type="text" name="name" value={name} onChange={event => handleName(event)} />
                        <div id={exercise.id}>
                            <input className='input-form' type="text" name="description" value={description} onChange={event => handleDescription(event)} />
                            <input className='input-form' type="text" name="targetMuscleGroup" value={targetMuscleGroup} onChange={event => handleTargetMuscleGroup(event)} />

                        </div>
                        <button type="submit" onClick={onUpdate} value={exercise.id}>Save</button>
                    </form>
                    <span>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleAddToWork}>Add</button>
                        <button onClick={handleEdit} type="submit" value={exercise.id}>Edit</button>
                    </span>
                    <div>
                        <input className='input-number' type="number" min="1" placeholder="ex: 8" />
                    </div>
                </div>
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

export default ExerciseItem;

const handleAddToWork = () => {
    alert("Added to workout");
}

const handleEdit = () => {
    document.getElementById("details").style.display = "block";
}