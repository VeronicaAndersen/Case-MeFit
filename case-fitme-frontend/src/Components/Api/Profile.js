import axios from "axios";
import keycloak from '../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in array of profile information)
export const createProfile = async (profileInfo) => {
    try {
        const response = await fetch(`${apiUrl}/profile`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify(profileInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new profile')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

//Update an existing profile
export const updateProfile = async (profileInfo, profileId) => {
    try {
        if(profileId === undefined){
            throw new Error("Profile ID is undefined");
        }
        const response = await axios.put(`${apiUrl}/profile/${profileId}`, profileInfo, {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`}
        })
        return [ null, response.data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

//Delete an existing profile (takes in a profile object)
export const deleteProfile = async (profileId) => {
    try {
        const response = await fetch(`${apiUrl}/profile/${profileId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify({
                profiles: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the profile')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }
}
//Update an existing profile with workoutId
export const uppdateProfile = async (profileId, workout) => {
    try {
        if(profileId === undefined){
            throw new Error("Profile id is undefined");
        }
        if(workout === undefined){
            throw new Error("Workout body is undefined");
        }
        const response = await fetch(`${apiUrl}/profile/${profileId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify({
                id: profileId, name: workout.name, category: null, workouts: [workout.id], profiles: []
            })
        })
        return [null, response.data]
    }
    catch(error){
        return [error.message, []]
    }

}
