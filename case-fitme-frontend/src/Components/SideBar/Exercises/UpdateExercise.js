import { updateExercise } from '../../Api/Exercise';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export default function UpdateExercises({ exercise }) {

    const { handleSubmit } = useForm()
    const [name, setName] = useState(exercise.name);
    const [targetMuscleGroup, setTargetMuscleGroup] = useState(exercise.targetMuscleGroup);
    const [description, setDescription] = useState(exercise.description);
    const [image, setImage] = useState(exercise.image);

    const onUpdate = () => {
        exercise.name = name;
        const newExercise = {
            name: name,
            description: exercise.description,
            targetMuscleGroup: exercise.targetMuscleGroup
        }
        updateExercise(exercise, exercise.id);
        setTimeout(function () {
            window.location.reload();
        }, 1000);
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

    const handleImage = (event) => {
        setImage(event.target.value);
    }

    return (
        <>
            {/* Form that updates exercise. */}
            <form className='updateForm' onSubmit={handleSubmit(onUpdate)}>
                <div>
                    <input className='input-form' type="text" name="name" key={exercise.name} value={name} onChange={event => handleName(event)} />
                    <input className='input-form' type="text" name="description" key={exercise.description} value={description} onChange={event => handleDescription(event)} />
                    <input className='input-form' type="text" name="targetMuscleGroup" key={exercise.targetMuscleGroup} value={targetMuscleGroup} onChange={event => handleTargetMuscleGroup(event)} /> {/* Contains null value. */}
                    <input className='input-form' type="text" name="name" key={exercise.image} value={image} onChange={event => handleImage(event)} />
                </div>
                <button className='save-btn' type="submit" onClick={onUpdate} value={exercise.id}>Save</button>
            </form>
        </>
    )
}