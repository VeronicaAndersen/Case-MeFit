import keycloak from "../../../Keycloak/keycloak";
import { useNavigate } from "react-router-dom";

const Dashboards = () => {
    let navigate = useNavigate();
    async function handleGoToSetGoals(event) {
        event.preventDefault();
        navigate("../setgoals", { replace: true });
        // replace: true will replace the current entry in 
        // the history stack instead of adding a new one.
    }
    return (
        <>
            {keycloak.authenticated && (
                <div>
                    <h1>Dashboard</h1>
                    <div className="items">
                    <div className="item">
                        <p>There is no goal set. Set goal first!</p>
                        <button onClick={handleGoToSetGoals}>Set Goals</button>
                    </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Dashboards;