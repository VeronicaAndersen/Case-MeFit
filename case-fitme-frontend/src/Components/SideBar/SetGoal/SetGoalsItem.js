import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import keycloak from "../../../Keycloak/keycloak";
import { deleteGoals, updateGoal } from "../../Api/Goal";

const apiUrl = process.env.REACT_APP_API_URL

const SetGoalsItem = ({ goal }) => {

    const [goalName, setGoalName] = useState(goal.name);
    const [date, setDate] = useState(goal.date);
    const [apiData, setApiData] = useState([]);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/goal`, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((goal) => {
                setApiData(goal);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const onUpdate = () => {
        const newWorkout = {
            goalName: goal.goalName,
            type: goal.date,
        }
        updateGoal(goal, goal.id)
        setTimeout(function () {
            window.location.reload();
        }, 5000);
    }

    const handleGoalName = (event) => {
        setGoalName(event.target.value);
    }

    const handleDate = (event) => {
        setDate(event.target.value);
    }


   /* const handleComplete = (event) => {
        setComplete(event.target.value);
    }*/

    const handleDelete = () => {
        deleteGoals(goal.id);
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
}
export default SetGoalsItem;