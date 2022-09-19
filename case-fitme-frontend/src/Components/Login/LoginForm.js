import keycloak from "../../Keycloak/keycloak";

/* LoginForm component contains two buttons [Login, Register]. */
const LoginForm = () => {
    return (
        <>
            <div>
                <section className="buttons">
                    {!keycloak.authenticated && (
                        <button className="button" onClick={() => keycloak.login()}>Login</button>
                    )}
                    {!keycloak.authenticated && (
                        <button className="button" onClick={() => keycloak.register()}>Register</button>
                    )}
                </section>
            </div>
        </>
    )
}
export default LoginForm;
