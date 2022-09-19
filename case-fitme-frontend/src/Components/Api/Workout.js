import axios from "axios";
import keycloak from '../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

//Create a new workout (takes in array of workout information)
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

//Update an existing workout
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

//Delete an existing workout (takes in a workout object)
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

//Update an existing workout with setId
export const updateSetInWorkout = async (workoutInfo, workoutId, set) => {
    try {
        if(workoutId === undefined){
            throw new Error("Workout id is undefined");
        }
        if(set === undefined){
            throw new Error("Set body is undefined");
        }
        let updatedWorkout = null;
        for (let i = 0; i < workoutInfo.length; i++) {
            if(workoutInfo[i].id === workoutId){
                updatedWorkout = workoutInfo[i];
                break;
            }
        }
        updatedWorkout.sets = [set]
        console.log(updatedWorkout);
        const response = await fetch(`${apiUrl}/workout/${workoutId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify(updatedWorkout)
        })
        return [null, response.data]
    }
    catch(error){
        return [error.message, []]
    }

}
