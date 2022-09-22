import { updateGoal } from '../../../Api/Goal';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export default function UpdateGoals({ goal }) {

    const { handleSubmit } = useForm();
    const [achieved, setAchieved] = useState(goal.achieved);

    /* Method that updates goals. */
    const onUpdate = () => {
        goal.achieved= achieved;
        goal.achieved=true;
            setAchieved(goal.achieved);
            console.log(goal);
        const newGoal = {
            achieved: goal.achieved
        }
        updateGoal(goal, goal.id)
        window.location.reload();
    }
    
    return (
        <>
            {/* Form that updates goal. */}
            <form className='updateForm update-achieved' onSubmit={handleSubmit(onUpdate)}>
                <div className="circle circle-btn"name="achieved" type="submit" value={achieved} onClick={onUpdate}></div>
            </form>
        </>
    )
}