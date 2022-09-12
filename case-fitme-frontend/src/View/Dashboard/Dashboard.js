import Dashboards from "../../Components/SideBar/Dashboards/Dashboards";
import keycloak from "../../Keycloak/keycloak";

const Dashboard = () => {

    return (
        <>
            {keycloak.authenticated && (
                <div className="content">
                    <Dashboards />
                </div>
            )}
        </>
    )
}

export default Dashboard;