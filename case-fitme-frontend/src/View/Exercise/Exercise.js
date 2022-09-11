import Exercises from "../../Components/SideBar/Exercises/Exercises"
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