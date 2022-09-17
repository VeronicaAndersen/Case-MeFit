import axios from "axios";
import keycloak from '../../Keycloak/keycloak'

const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in array of exercise information)
export const createExercise = async (exerciseInfo) => {
    try {
        const response = await axios.post(`${apiUrl}/exercise`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${keycloak.token}`
            },
            body: JSON.stringify(exerciseInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new exercise')
        }
        console.log(exerciseInfo);
        const data = await response.json();
        setTimeout(() => {
            const statusMessage = document.getElementById('box');
            statusMessage.style.display = 'none';
        }, 1000);
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }

}

//Update an existing exercise
export const updateExercise = async (exerciseInfo, exerciseId) => {
    try {
        if (exerciseId === undefined) {
            throw new Error("Exercise ID is undefined");
        }
        const response = await axios.put(`${apiUrl}/exercise/${exerciseId}`, exerciseInfo, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}` }
        })
        return [null, response.data]
    }
    catch (error) {
        return [error.message, []]

    }
}

//Delete an existing exercise (takes in a exercise object)
export const deleteExercise = async (exerciseId) => {
    try {
        const response = await fetch(`${apiUrl}/exercise/${exerciseId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}` },
            body: JSON.stringify({
                exercises: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the exercise')
        }
        const result = await response.json()
        return [null, result]
    }
    catch (error) {
        return [error.message, null]
    }

}

//Update an existing program with workoutId
export const updateExerciseSet = async (programInfo, programId, workout) => {
    try {
        if (programId === undefined) {
            throw new Error("Program id is undefined");
        }
        if (workout === undefined) {
            throw new Error("Workout body is undefined");
        }
        let updatedProgram = null;
        for (let i = 0; i < programInfo.length; i++) {
            if (programInfo[i].id === programId) {
                updatedProgram = programInfo[i];
                break;
            }
        }
        updatedProgram.workouts = [workout]
        console.log(updatedProgram);
        const response = await fetch(`${apiUrl}/program/${programId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}` },
            body: JSON.stringify(updatedProgram)
        })
        return [null, response.data]
    }
    catch (error) {
        return [error.message, []]
    }

}