import GoalDashboard from "../../Components/Goal/GoalDashboard"
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