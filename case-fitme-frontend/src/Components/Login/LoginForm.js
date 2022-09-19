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
                    {keycloak.authenticated && (
                        <div className="content">
                            <h1>Welcome {keycloak.tokenParsed.name}</h1>
                            </div>
                    )}
                </section>
            </div>
        </>
    )
}
export default LoginForm;
