import { createHeaders } from '.'
const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in array of game information)
export const createExercise = async (exerciseInfo) => {
    try {
        console.log(`${apiUrl}/exercise`);
        const response = await fetch(`${apiUrl}/exercise`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(exerciseInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new exercise')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }

}
