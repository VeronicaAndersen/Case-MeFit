import { Form } from 'easy-react-form'
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { createGoal } from '../../Api/Goal';
import { useForm } from 'react-hook-form';
import SetGoalsItem from "./SetGoalsItem";

const SetGoal = () => {

    const [apiData, setApiData] = useState([]);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);
    const [date, setDate] = useState(null);

    const onSubmit = async ({goalName, achieved}) => {
        console.log("I am inside onsubmit")
        console.log(goalName);
        console.log(achieved);
        const goal = {
            goalName: goalName,
            date: date,
            achieved: achieved
        }
        console.log(goal);
        const [error, userResponse] = await createGoal(goal)

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            alert("Goal added.")
        }
    }

    return (
        <>
            <form id='createGoal' onSubmit={handleSubmit(onSubmit)}>
                <h1>Set new Goal</h1>
                <input className='input-form' type="text" placeholder='Name' {...register("goalName")} />
                <DatePick {...register("date")} updateDate={setDate} />
                <input className='input-form' type="text" placeholder='Achieved: ex. false/true' {...register("achieved")} />
                <br />
                <br />
                {<button className='save-btn' type="submit" value="Submit">Submit</button>}
            </form>
            {apiData.map((data) => {
                return (
                    <div key={data.id} >
                        <SetGoalsItem goal={data} />
                    </div>)
            })}
        </>
    )
}



function DatePick({updateDate}) {
    const [date, setDate] = useState();
    console.log("Date", date);
    updateDate(date);
    return (
        <>
            <input className='inputDate' type="date" onChange={e => setDate(e.target.value)} />
        </>
    )
}
export default SetGoal;
