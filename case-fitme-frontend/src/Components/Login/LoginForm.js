import keycloak from "../../Keycloak/keycloak";

const LoginForm = () => {
    return (
        <>
            <div>
                <section className="buttons">
                {!keycloak.authenticated && (
                        <button onClick={() => keycloak.login()}>Login</button>
                    )}
                    {!keycloak.authenticated && (
                        <button onClick={() => keycloak.register()}>Register</button>
                    )}
                    {keycloak.authenticated && (
                        <button onClick={() => keycloak.logout()}>Logout</button>
                    )}
                </section>
            </div>
        </>
    )
}
export default LoginForm;
