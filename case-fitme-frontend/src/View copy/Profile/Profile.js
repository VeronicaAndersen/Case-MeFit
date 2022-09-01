import keycloak from "../../Keycloak/keycloak"


const Profile = () => {

    return (
        <>
            {
                keycloak.tokenParsed &&
                <div>
                    <p>Welcome {keycloak.tokenParsed.name}!</p>
                </div>
            }

        </>
    )
}

export default Profile