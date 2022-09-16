import axios from "axios";
import keycloak from '../../Keycloak/keycloak'

const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in array of set information)
export const createSet = async (setInfo) => {
    try {
        const response = await fetch(`${apiUrl}/set`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify(setInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new set')
        }
        console.log(setInfo);
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }

}

//Update an existing set
export const updateSet = async (setInfo, setId) => {
    try {
        if(setId === undefined){
            throw new Error("Set ID is undefined");
        }
        const response = await axios.put(`${apiUrl}/set/${setId}`, setInfo, {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`} 
        })
        return [ null, response.data ]
    }
    catch (error) {
        return [ error.message, [] ]
        
    }
}

//Delete an existing set (takes in a set object)
export const deleteSet = async (setId) => {
    try {
        const response = await fetch(`${apiUrl}/set/${setId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}`},
            body: JSON.stringify({
                sets: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the set')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}
