import { useState, useEffect } from 'react';

const Exercises = () => {
    const [name, setName] = useState([]);
    useEffect(() => {
        names()
    }, []);

    const names = async () => {
        const api_url = `https://fitmecase.herokuapp.com/api/v1/exercise`;
        const responce = await fetch(api_url)
        setName(await responce.json());
    }
    return (
        <>
            <div className="content">
                <h1>Exercises</h1>
                <table>
                    {name.map((data) => {
                        console.log(data);
                        return (
                            <div className="items">
                                <div className="item">
                                    <p>{data.name}</p>
                                    <div>
                                        <input type="number" min="1" placeholder="ex: 8" />
                                        <button onClick={handleAddExer}>Add</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </table>

            </div>
        </>
    )
}
export default Exercises;

const handleAddExer = () => {
    alert("Added");
}

