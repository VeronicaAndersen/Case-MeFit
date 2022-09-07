import { useNavigate } from "react-router-dom";

const Exercises = () => {
    let navigate = useNavigate();
    async function handleGoToExer(event) {
        event.preventDefault();
        navigate("../exercise", { replace: true });
        // replace: true will replace the current entry in 
        // the history stack instead of adding a new one.
    }
    return (
        <>
                <h1>Workouts</h1>
                <div className="items">
                    <div className="item">
                        <p>There is no workouts. Do you want to add some exercises?</p>
                        <button onClick={handleGoToExer}>Go to Exercise</button>
                    </div>
                </div>
        </>
    )
}
export default Exercises;

