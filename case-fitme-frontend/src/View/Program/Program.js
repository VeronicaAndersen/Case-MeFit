import Programs from "../../Components/Goal/Programs/Programs"
import keycloak from "../../Keycloak/keycloak";

const Program = () => {

    return (
        <>
            {keycloak.authenticated && (
                <div className="content">
                    <Programs />
                </div>
            )}
        </>
    )
}
export default Program;