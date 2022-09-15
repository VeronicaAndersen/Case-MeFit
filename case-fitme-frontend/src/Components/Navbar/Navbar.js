import keycloak from "../../Keycloak/keycloak";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";

const Navbar = () => {
    return (
        <>
            <nav>
                <Link className="menu-item"
                    id="logo"
                    to="/">
                    <strong>MeFit</strong>
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
                            {keycloak.tokenParsed.name} 
                            <span className="dropdown-arrow"></span>
                            <div className="dropdown-profile">
                                <div><Link 
                                    id="settings"
                                    to="/profile">
                                    Settings
                                </Link>
                                </div>
                                <div onClick={() => keycloak.logout()} id="logout">Logout</div>
                            </div>
                        </div>
                    </div>
                )}

            </nav>
            <Sidebar />
                <div className="token">{keycloak.token}</div>

        </>
    )
}
export default Navbar;
