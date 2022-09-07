import Profiles from "../../Components/Profiles/Profiles";
import keycloak from "../../Keycloak/keycloak"

const Profile = () => {
    return (
        <>
            {keycloak.authenticated && (
                <div className="content">
                    <Profiles />
                </div>
            )}
        </>
    )
}
export default Profile;