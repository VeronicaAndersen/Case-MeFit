const Exercises = () => {
    return (
        <>
            <div className="content">
                <h1>Exercises</h1>
                <div className="items">
                    <div className="item">
                        <p>Item</p>
                        <div>
                            <input type="number" min="1" placeholder="ex: 8"/>
                            <button onClick={handleAddExer}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Exercises;

const handleAddExer = () => {
    alert("Added");
}