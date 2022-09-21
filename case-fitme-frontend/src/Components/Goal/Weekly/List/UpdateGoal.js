import { updateGoal } from '../../../Api/Goal';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export default function UpdateGoals({ goal }) {

    const { handleSubmit } = useForm();
    const [achieved, setAchieved] = useState(goal.achieved);

    /* Method that updates goals. */
    const onUpdate = () => {
        goal.achieved= achieved;
        const newGoal = {
            achieved: goal.achieved
        }
        console.log(goal);
        updateGoal(goal, goal.id)
        window.location.reload();
    }
    
        /* Methods that sets the value from the form. */
        const handleAchieved = (event) => {
            setAchieved(event.target.value);
        }

    return (
        <>
            {/* Form that updates goal. */}
            <form className='updateForm update-achieved' onSubmit={handleSubmit(onUpdate)}>
                <label>Goal achieved?</label><br/>
                <input className='input-form' type="text" name="achieved" value={achieved} onChange={event => handleAchieved(event)} /><br/>
                <button className='save-btn' type="submit" onClick={onUpdate} value={goal.id}>Save</button>
            </form>
        </>
    )
}