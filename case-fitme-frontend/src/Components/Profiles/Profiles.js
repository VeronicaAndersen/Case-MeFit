const Profiles = () => {
    return (
        <>
            <h1>Profiles</h1>

            <div className="profile-input">
                <input type="text" className="input-form" placeholder=" Email" />
                <input type="password" className="input-form" placeholder=" Password" />
                <input type="number" className="input-form" placeholder=" Weight" />
                <input type="number" className="input-form" placeholder=" Height" />
                <label for="img">Upload profile picture:</label>
                <input type="file" id="img" name="img" accept="image/*"></input>
                <button id="contri-btn">Request being contributor</button>
                <button id="fa-btn">Add 2FA</button>
                <button id="save-btn">Save</button>
            </div>
        </>
    )
}
export default Profiles;