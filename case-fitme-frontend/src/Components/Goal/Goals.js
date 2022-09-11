import keycloak from "../../Keycloak/keycloak";
import TodaysLists from "./TodayLists/TodaysLists";
import GoalDropdown from "./GoalDropdown/GoalDropdown";

const Goal = () => {
    return (
        <>
            {keycloak.authenticated && (
                <div>
                    <h1>Goals</h1>
                    <TodaysLists />
                    <GoalDropdown />
                </div>
            )}
        </>
    )
}
export default Goal;
