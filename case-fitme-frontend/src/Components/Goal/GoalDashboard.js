import keycloak from "../../Keycloak/keycloak";

const Goal = () => {
    return (
        <>
        {keycloak.authenticated && (
            <h1>
                Goal Dashboard
            </h1>
        )}
        </>
    )
}
export default Goal;
