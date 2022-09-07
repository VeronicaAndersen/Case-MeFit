import keycloak from "../../Keycloak/keycloak";
import GoalDropdown from "./GoalDropdown/GoalDropdown";
import SetGoal from "./SetGoal/SetGoal";

const Goal = () => {
    return (
        <>
        {keycloak.authenticated && (
            <div>
            <h1>
                Goal Dashboard
            </h1>
            <GoalDropdown/>
            <SetGoal/>
            </div>
        )}
        </>
    )
}
export default Goal;
