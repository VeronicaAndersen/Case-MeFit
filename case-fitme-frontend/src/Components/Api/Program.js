import { createHeaders } from '.'
import axios from "axios";
import keycloak from '../../Keycloak/keycloak';

const apiUrl = process.env.REACT_APP_API_URL

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

