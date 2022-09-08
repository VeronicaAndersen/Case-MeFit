import { Form } from 'easy-react-form'
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


const SetGoal = () => {
    return (
        <>
            <h1>Set Goal</h1>
            <Form onSubmit={values => console.log(values)}>
                <input className='input-form'
                    name="goalName"
                    component="input"
                    type="tel"
                    placeholder="Goal Name" />
                <br />
                <DatePick />
                <button id='submitbtn'> Save Goal </button>
            </Form>
            <GoalBox />
        </>
    )
}

function DatePick() {
    const [date, setDate] = useState();
    console.log("Date", date);
    return (
        <>
            <input type="date" onChange={e => setDate(e.target.value)} />
        </>
    )
}

const GoalBox = () => {
    return (
        <>
            <button id='setgoalbtn'>Programs</button>
            <button id='setgoalbtn'>Workouts</button>
                <div className="setgoalbox">
                    <p>There is no program for this goal.</p>
                </div>

        </>
    )
}

export default SetGoal;



