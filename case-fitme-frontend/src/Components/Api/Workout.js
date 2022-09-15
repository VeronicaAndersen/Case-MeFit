import { createHeaders } from '.'
import axios from "axios";
import keycloak from '../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

export const createWorkout = async (workoutInfo) => {
    try {
        const response = await fetch(`${apiUrl}/workout`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify(workoutInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new workout')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}


export const updateWorkout = async (workoutInfo, workoutId) => {
    try {
        if(workoutId === undefined){
            throw new Error("Workout ID is undefined");
        }
        const response = await axios.put(`${apiUrl}/workout/${workoutId}`, workoutInfo, {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`}
        })
        return [ null, response.data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

export const deleteWorkout = async (workoutId) => {
    try {
        const response = await fetch(`${apiUrl}/workout/${workoutId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify({
                workouts: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the workout')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }
}

