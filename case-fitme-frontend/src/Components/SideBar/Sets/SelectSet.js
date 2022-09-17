import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { deleteWorkout, updateWorkout } from '../../Api/Workout';
import { updateExerciseInSet } from '../../Api/Set';
import keycloak from '../../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export default function SelectSet({set}) {


    const [exerciseRepetition, setExerciseRepetition] = useState(set.exerciseRepetition);
    const [setApiData, setSetApiData] = useState([]);
    const [selectedSetId, setSelectedSetId] = useState(null);

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${keycloak.token}` };
        fetch(`${apiUrl}/set`, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((set) => {
                setSetApiData(set);
                setSelectedSetId(set[0])
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleAddToSet = () => {
        updateExerciseInSet(setApiData, selectedSetId, set.id);
    }
    const handleSetSelect = (event) => {
        setSelectedSetId(event.target.value);
    }

    return (
        <>

            <select exerciseRepetition="sets" className='select' id="sets" onChange={event => handleSetSelect(event)}>
                {setApiData.map((set) => {
                    return (
                        <option value={set.id}>{set.exerciseRepetition}</option>
                    )
                })}
            </select>

        </>
    )
}
