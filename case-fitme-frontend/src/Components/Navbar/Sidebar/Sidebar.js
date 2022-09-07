import keycloak from "../../../Keycloak/keycloak";
import { Link } from "react-router-dom";
const Sidebar = () => {

    return (
        <>
            {keycloak.authenticated && (
                <div className="sidebar">
                    <Link className="side-item"
                        id="dashboard"
                        to="/goalsdashboard">
                        Dashboard
                    </Link>
                    <Link className="side-item"
                        id="set"
                        to="/setgoals">
                        Set Goal
                    </Link>
                    <Link className="side-item"
                        id="archived"
                        to="/archivedgoals">
                        Archived Goal
                    </Link>
                    <Link className="side-item"
                        id="exercise"
                        to="/exercise">
                        Exercises
                    </Link>
                    <Link className="side-item"
                        id="workout"
                        to="/workouts">
                        Workouts
                    </Link>
                    <Link className="side-item"
                        id="program"
                        to="/programs">
                        Programs
                    </Link>
                </div>
            )}
        </>
    )
}
export default Sidebar;