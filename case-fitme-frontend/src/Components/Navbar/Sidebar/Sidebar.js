import keycloak from "../../../Keycloak/keycloak";
import { Link } from "react-router-dom";
const Sidebar = () => {

    return (
        <>
            {keycloak.authenticated && (
                <div className="sidebar">
                    <Link className="side-item"
                        id="goal"
                        to="/goalsdashboard">
                        Dashboard
                    </Link>
                    <Link className="side-item"
                        id="goal"
                        to="/setgoals">
                        Set Goal
                    </Link>
                    <Link className="side-item"
                        id="goal"
                        to="/archivedgoals">
                        Archived Goal
                    </Link>
                    <Link className="side-item"
                        id="goal"
                        to="/exercise">
                        Exercise
                    </Link>
                    <Link className="side-item"
                        id="goal"
                        to="/workouts">
                        Workouts
                    </Link>
                    <Link className="side-item"
                        id="goal"
                        to="/programs">
                        Programs
                    </Link>
                </div>
            )}
        </>
    )
}
export default Sidebar;