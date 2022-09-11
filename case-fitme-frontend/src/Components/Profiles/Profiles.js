const Profiles = () => {
    return (
        <>
            <h1>Profiles</h1>

            <input type="text" className="input-form" placeholder=" Email"/>
            <input type="password" className="input-form" placeholder=" Password"/>
            <input type="number" className="input-form" placeholder=" Weight"/>
            <input type="number" className="input-form" placeholder=" Height"/>
            <button id="contri-btn">Request being contributor</button>
            <button id="fa-btn">Add 2FA</button>
        </>
    )
}
export default Profiles;