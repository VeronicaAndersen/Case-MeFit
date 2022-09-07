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
                    <br/>
                <DatePick />
                <button id='submitbtn'> Save Goal </button>
            </Form>
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

export default SetGoal;



