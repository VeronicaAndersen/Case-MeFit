import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createExercise } from '../../Api/Exercise';
import ExerciseItem from './ExerciseItem';
import keycloak from '../../../Keycloak/keycloak';
import Sets from '../Sets/InsertSets';
import InsertExercises from './InsertExercise';

const apiUrl = process.env.REACT_APP_API_URL

export default function Exercises () {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
    const [apiError, setApiError] = useState(null);

    /* Api fetch request with error handling. */
    useEffect(() => {
        const headers = { Authorization: `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/exercise`, { headers, crossDomain: true })
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
    const onSubmit = async (exercise) => {
        const [error, userResponse] = await createExercise(exercise)

        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            //console.log(exercise);
            //window.location.reload();
        }
    }

    if (loading === true) {
        return null
    } else {
        return (
            <>
                <div className="content">
                    <h1>Exercises</h1>
                    <InsertExercises />
                    <Sets />

                    {loading === false && apiData.map((data) => {
                        return (
                            <div key={data.id} >
                                <ExerciseItem exercise={data} />
                            </div>)
                    })}
                </div>
            </>
        )
    }
}
