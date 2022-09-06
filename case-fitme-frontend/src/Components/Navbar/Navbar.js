import keycloak from "../../Keycloak/keycloak";
import { GiWeightLiftingUp } from "react-icons/gi";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
    return (
        <>
            <nav>
            <Link className="menu-item"
                        id="logo"
                        to="/">
                        <strong>FitMe</strong>
                    </Link>
                {keycloak.authenticated && (
                    <Link className="menu-item"
                        id="goals"
                        to="/goals">
                        Goals
                    </Link>
                )}
                {keycloak.authenticated && (
                    <div className="dropdown">
                        <div className="menu-item"
                            id="profile"
                            to="/profile">
                            <GiWeightLiftingUp /> Profile
                            <span className="dropdown-arrow"></span>
                            <div className="dropdown-profile">
                                <div>Settings</div>
                                <div onClick={() => keycloak.logout()} id="logout">Logout</div>
                            </div>
                        </div>
                    </div>
                )}

            </nav>
            <Sidebar />

        </>
    )
}
export default Navbar;
