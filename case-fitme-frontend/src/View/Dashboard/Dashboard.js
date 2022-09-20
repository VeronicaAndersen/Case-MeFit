import Dashboards from "../../Components/SideBar/Dashboards/Dashboards";
import keycloak from "../../Keycloak/keycloak";
import Goals from "../../Components/Goal/Goals"

const Dashboard = () => {

    return (
        <>
            {/* {keycloak.authenticated && (
                <div className="content">
                    <Dashboards />
                </div>
            )} */}
            {keycloak.authenticated && (
                <div className="content">
                    <Goals />
                </div>
            )}
        </>
    )
}

export default Dashboard;