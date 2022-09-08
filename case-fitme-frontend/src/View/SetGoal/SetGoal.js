import SetGoals from "../../Components/Goal/SetGoal/SetGoal"
import keycloak from "../../Keycloak/keycloak"

const SetGoal = () => {

    return (
        <>
        {keycloak.authenticated && (
            <div className="content">
                <SetGoals/>
                
            </div>
        )}
        </>
    )
}

export default SetGoal