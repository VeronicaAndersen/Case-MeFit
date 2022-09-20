import ArchivedGoals from "../../Components/ArchivedGoal/ArchivedGoals";
import keycloak from "../../Keycloak/keycloak";

const WeeklyLists = () => {

    return (
        <>
            {keycloak.authenticated && (
            <div className="content">
                <h1>Archived goals</h1>
                <ArchivedGoals />
            </div>
            )}
        </>
    )
}
export default WeeklyLists;