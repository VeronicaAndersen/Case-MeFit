import keycloak from "../../Keycloak/keycloak";
import { GiWeightLiftingUp } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                {keycloak.authenticated && (
                    <div className="dropdown">
                        <div className="menu-item"
                            id="profile"
                            to="/profile">
                            <GiWeightLiftingUp /> Profile
                            <span className="dropdown-arrow"></span>
                            <div className="dropdown-content">
                                <div>Settings</div>
                                <div onClick={() => keycloak.logout()} id="logout">Logout</div>
                            </div>
                        </div>
                    </div>
                )}
                {keycloak.authenticated && (
                    <Link className="menu-item"
                        id="goals"
                        to="/goals">
                        Goals
                    </Link>
                )}

            </nav>

        </>
    )
}
export default Navbar;
