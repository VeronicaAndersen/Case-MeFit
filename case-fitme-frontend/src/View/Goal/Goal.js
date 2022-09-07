import GoalDashboard from "../../Components/Goal/GoalDashboard"
import SetGoal from "../../Components/Goal/SetGoal/SetGoal"
import keycloak from "../../Keycloak/keycloak"



const Goal = () => {

    return (
        <>
                <div>
                    <p>Welcome {keycloak.tokenParsed.name}!</p>
                    <GoalDashboard/>
                </div>
        </>
    )
}

export default Goal