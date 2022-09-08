import SetGoals from "../../Components/Goal/SetGoal/SetGoal"
import keycloak from "../../Keycloak/keycloak"

const SetGoal = () => {

    return (
        <>
<<<<<<< HEAD
        {keycloak.authenticated && (
            <div className="content">
                <SetGoals/>
                
            </div>
        )}
=======
            {keycloak.authenticated && (
                <div className="content">
                    <SetGoals />
                </div>
            )}
>>>>>>> 9bca04c7b6c8cc2bf000090746576a037dd69671
        </>
    )
}

export default SetGoal