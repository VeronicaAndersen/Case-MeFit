import keycloak from "../../Keycloak/keycloak";
import GoalDropdown from "./GoalDropdown/GoalDropdown";

const Goal = () => {
    return (
        <>
        {keycloak.authenticated && (
            <div className="content">
            <h1>
                Goal Dashboard
            </h1>
            <GoalDropdown/>
                <ul className="today-schedule">
                    <li className="workout">Workout 1</li>
                    <li className="place">Place 1</li>
                    <li className="time">Time 1</li>
                </ul>
            </div>
        )}
        </>
    )
}
export default Goal;
