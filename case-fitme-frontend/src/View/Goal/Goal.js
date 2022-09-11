import Goals from "../../Components/Goal/Goals"
import keycloak from "../../Keycloak/keycloak"

const Goal = () => {

    return (
        <>
            {keycloak.authenticated && (
                <div className="content">
                    <Goals />
                </div>
            )}
        </>
    )
}

export default Goal