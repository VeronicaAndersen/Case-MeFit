import { Form } from 'easy-react-form'
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { createGoal } from '../../Api/Goal';
import { useForm } from 'react-hook-form';

const SetGoal = () => {

    const [apiError, setApiError] = useState(null);
    const { register, handleSubmit } = useForm();


    const onSubmit = async (goal) => {
        console.log("I am inside onsubmit")

        const [error, userResponse] = await createGoal(goal)

        if (error !== null) {
            setApiError(error)
        }
        /*if (userResponse !== null) {
            window.location.reload();
        }*/
    }

    return (
        <>
                <form id='createGoal' onSubmit={handleSubmit(onSubmit)}>
                <h1>Set new Goal</h1>
                <input className='input-form' type="text" placeholder='Name' {...register("goalName")} />
                <DatePick {...register("date")} />
                <br />
                <GoalBox />
                <br />
                    {<button type="submit" value="Submit">Submit</button>}
            </form>
        </>
    )
}



function DatePick() {
    const [date, setDate] = useState();
    console.log("Date", date);
    return (
        <>
            <input className='inputDate' type="date" onChange={e => setDate(e.target.value)} />
        </>
    )
}

const GoalBox = () => {

    return (
        <>
            <button className='setgoalbtn' id='setProgram' onClick={checkActive}>Programs</button>
            <button className='setgoalbtn' id='setWorkout' onClick={checkActive}>Workouts</button>

            <div className="setgoalbox" id='programGoal'>
                <p>There is no program for this goal.</p>
            </div>

            <div className="setgoalbox" id='workoutGoal'>
                <p>There is no workout for this goal.</p>
            </div>

        </>
    )
}

export default SetGoal;

var checkProg = true;
var checkWork = false;

const checkActive = () => {
    if (checkWork === false && checkProg === true) {
        checkProg = false;
        document.getElementById("setProgram").style.background = "var(--primary)";
        document.getElementById("setProgram").style.border = "var(--primary) solid 2px";
        document.getElementById("programGoal").style.display = "flex";

        checkWork = true;
        document.getElementById("setWorkout").style.border = "none"
        document.getElementById("setWorkout").style.background = "#f1f1f1";
        document.getElementById("workoutGoal").style.display = "none";

    } else if (checkWork === true && checkProg === false) {
        checkProg = true;
        document.getElementById("setProgram").style.border = "none"
        document.getElementById("setProgram").style.background = "#f1f1f1";
        document.getElementById("programGoal").style.display = "none";

        checkWork = false;
        document.getElementById("setWorkout").style.background = "var(--primary)";
        document.getElementById("setWorkout").style.border = "var(--primary) solid 2px";
        document.getElementById("workoutGoal").style.display = "flex";
    }
}
