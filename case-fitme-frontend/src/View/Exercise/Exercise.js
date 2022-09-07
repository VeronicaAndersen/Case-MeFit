import Exercises from "../../Components/Goal/Exercises/Exercises"
import keycloak from "../../Keycloak/keycloak";

const Exercise = () => {

    return (
        <>
        {keycloak.authenticated && (
            <div>
                <Exercises />
            </div>
        )}
        </>
    )
}

export default Exercise