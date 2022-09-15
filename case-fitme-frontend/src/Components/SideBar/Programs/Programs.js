import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import keycloak from '../../../Keycloak/keycloak';
import { createProgram } from "../../Api/Program";
import ProgramItem from "./ProgramItem";

const apiUrl = process.env.REACT_APP_API_URL

const Programs = () => {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/program`, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setApiData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const onSubmit = async (program) => {
        const [error, userResponse] = await createProgram(program)

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            window.location.reload();
        }
    }
    if (loading === true) {
        return null
    } else {
        return (
            <>
                <h1>Programs</h1>
                <div className="items">
                    <div className='item none'>
                        <button onClick={handleAddProgram}>Create new Program</button>
                    </div>
                    <form id='createProgram' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Create new Program</h1>
                        <span className='close' onClick={handleClose}>X</span>
                        <input className='input-form' type="text" placeholder='Name' {...register("name")} />
                        <input className='input-form' type="text" placeholder='Type' {...register("type")} />
                        <br />
                        <div className='item none'>
                            {<button type="submit" value="Submit">Submit</button>}
                        </div>
                    </form>
                    {loading === false && apiData.map((data) => {
                        return (
                            <div key={data.id} >
                                <ProgramItem program={data} />
                            </div>)
                    })}
                </div>
            </>
        )
    }
}
export default Programs;

const handleAddProgram = () => {
    document.getElementById("createProgram").style.display = "block";
}

const handleClose = () => {
    document.getElementById("createProgram").style.display = "none";
}