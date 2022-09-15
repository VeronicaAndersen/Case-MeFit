import axios from "axios";
import keycloak from '../../Keycloak/keycloak'

const apiUrl = process.env.REACT_APP_API_URL

//Create a new goal (takes in array of goal information)
export const createGoal = async (goalInfo) => {
    try {
        const response = await fetch(`${apiUrl}/goal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${keycloak.token}`
            },
            body: JSON.stringify(goalInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new goal')
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }

}


//Update an existing goal
export const updateGoal = async (goalInfo, goalId) => {
    try {
        if (goalId === undefined) {

            throw new Error("Game ID is undefined");

        }
        const response = await axios.put(`${apiUrl}/goal/${goalId}`, goalInfo, {
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}` }

        })

        return [null, response.data]
    }
    catch (error) {
        return [error.message, []]

    }
}

//Delete an existing goal (takes in a goal object)
export const deleteGoals = async (goalId) => {
    try {
        const response = await fetch(`${apiUrl}/goal/${goalId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${keycloak.token}` },
            body: JSON.stringify({
                goals: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the goal')
        }
        const result = await response.json()
        return [null, result]
    }
    catch (error) {
        return [error.message, null]
    }

}

