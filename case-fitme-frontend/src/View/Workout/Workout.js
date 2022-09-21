import Workouts from "../../Components/SideBar/Workouts/Workouts"
import keycloak from "../../Keycloak/keycloak";

const Workout = () => {

    return (
        <>
            {keycloak.authenticated && (
                <div className="content">
                    <Workouts />
                </div>
            )}
        </>
    )
}

export default Workout