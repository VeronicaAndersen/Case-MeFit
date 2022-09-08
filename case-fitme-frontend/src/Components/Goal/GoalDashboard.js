import keycloak from "../../Keycloak/keycloak";
import GoalDropdown from "./GoalDropdown/GoalDropdown";

const Goal = () => {
    return (
        <>
        {keycloak.authenticated && (
            <div>
            <h1>
                Goal Dashboard
            </h1>
            <GoalDropdown/>
            
            </div>
        )}
        </>
    )
}
export default Goal;
