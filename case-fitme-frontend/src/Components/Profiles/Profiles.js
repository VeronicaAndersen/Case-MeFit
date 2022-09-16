import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import keycloak from '../../Keycloak/keycloak';
import { createProfile } from "../Api/Profile";

const apiUrl = process.env.REACT_APP_API_URL

const Profiles = () => {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);

    /* Api fetch request with error handling. */
    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/profile`, { headers })
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

    /* Method for creating. */
    const onSubmit = async (profile) => {
        const [error, userResponse] = await createProfile(profile)

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
                <h1>Profiles</h1>

                <div className="items">
                    <div className='item none'>
                        <button onClick={handleAddProfile}>Create new Profile</button>
                    </div>

                    {/* Form that creates new profile. */}
                    <form id='createProfile' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Create new Profile</h1>
                        <span className='close' onClick={handleClose}>X</span>
                        <input className='input-form' type="text" placeholder='Name' {...register("weight")} />
                        <input className='input-form' type="text" placeholder='Type' {...register("height")} />
                        <input className='input-form' type="text" placeholder='Medical Conditions' {...register("medical_conditions")} />
                        <input className='input-form' type="text" placeholder='Disabilities' {...register("disabilities")} />
                        <br />
                        <div className='item none'>
                            {<button type="submit" value="Submit">Submit</button>}
                        </div>
                    </form>
                   
                </div>
            </>
        )
    }
}
export default Profiles;

/* Methods that styles specific id. */
const handleAddProfile = () => {
    document.getElementById("createProfile").style.display = "block";
}

const handleClose = () => {
    document.getElementById("createProfile").style.display = "none";
}