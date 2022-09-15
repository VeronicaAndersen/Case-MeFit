import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
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
        setTimeout(function(){
            window.location.reload();
            }, 1000);
    }

    if (exercise.id != null) {
        return (
            <>
                <div className="item" key={exercise.id}>
                    <p>{exercise.name}</p>

                    <div>
                        <input className='input-number' type="number" min="1" placeholder="ex: 8" />
                    </div>
                    <span>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleAddToWork}>Add</button>
                    </span>
                </div>
                <form onSubmit={handleSubmit(onUpdate)}>
                    <input className='input-form' type="text" name="name" value={exercise.name} onChange={event => handleName(event)} />
                    <div id={exercise.id}>
                        <input className='input-form' type="text" name="description" value={exercise.description} onChange={event => handleDescription(event)} />
                        <input className='input-form' type="text" name="targetMuscleGroup" value={exercise.targetMuscleGroup} onChange={event => handleTargetMuscleGroup(event)} />
                    </div>
                    <button type="submit" onClick={onUpdate} value={exercise.id}>Save</button>
                </form>
            </>
        )
    }else {
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
