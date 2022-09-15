import axios from "axios";
import keycloak from '../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in array of program information)
export const createProgram = async (programInfo) => {
    try {
        const response = await fetch(`${apiUrl}/program`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify(programInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new program')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

//Update an existing program
export const updateProgram = async (programInfo, programId) => {
    try {
        if(programId === undefined){
            throw new Error("Program ID is undefined");
        }
        const response = await axios.put(`${apiUrl}/program/${programId}`, programInfo, {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`}
        })
        return [ null, response.data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

//Delete an existing program (takes in a program object)
export const deleteProgram = async (programId) => {
    try {
        const response = await fetch(`${apiUrl}/program/${programId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify({
                programs: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the program')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }
}
//Update an existing program with workoutId
export const uppdateProgram = async (programId, workout) => {
    try {
        if(programId === undefined){
            throw new Error("Program id is undefined");
        }
        if(workout === undefined){
            throw new Error("Workout body is undefined");
        }
        const response = await fetch(`${apiUrl}/program/${programId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify({
                id: programId, name: workout.name, category: null, workouts: [workout.id], profiles: []
            })
        })
        return [null, response.data]
    }
    catch(error){
        return [error.message, []]
    }

}

export const updateMission = async (missionInfo, missionId) => {

    try {

        const response = await fetch(`${apiUrl}/missions/${missionId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                missionId: missionInfo.missionId, 
                missionName: missionInfo.missionName, 
                isHumanVisible: missionInfo.isHumanVisible, 
                isZombieVisible: missionInfo.isZombieVisible, 
                description: missionInfo.description, 
                startTime: missionInfo.startTime, 
                endTime: missionInfo.endTime, 
                gameId: missionInfo.game})
        })
        if (!response.ok) {
            throw new Error('Could not update the game')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }

}