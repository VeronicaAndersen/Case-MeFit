import { useNavigate } from "react-router-dom";

const Programs = () => {
    let navigate = useNavigate();
    async function handleGoToWork(event) {
        event.preventDefault();
        navigate("../workouts", { replace: true });
        // replace: true will replace the current entry in 
        // the history stack instead of adding a new one.
    }

    return (
        <>
            <h1>Programs</h1>
            <div className="items">
                <div className="item">
                    <p>There is no programs. Do you want to add some workouts?</p>
                    <button onClick={handleGoToWork}>Go to Workouts</button>
                </div>
            </div>
        </>
    )
}
export default Programs;