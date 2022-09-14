import { createHeaders } from '.'
const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in array of exercise information)
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


//Update an existing exercise
export const updateExercise = async (exerciseInfo, exerciseId) => {
    try {
        const response = await fetch(`${apiUrl}/exercises/${exerciseId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                exerciseId: exerciseInfo.exerciseId, 
                exerciseName: exerciseInfo.exerciseName, 
                exerciseState: exerciseInfo.exerciseState, 
                description: exerciseInfo.description, 
                nwLat: exerciseInfo.nwLat, 
                nwLng: exerciseInfo.nwLng, 
                seLat: exerciseInfo.seLat, 
                seLng: exerciseInfo.seLng 
            })
        })
        if (!response.ok) {
            throw new Error('Could not update the exercise')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
        
    }
}

//Delete an existing exercise (takes in a exercise object)
export const deleteExercise = async (exerciseId) => {
    try {
        const response = await fetch(`${apiUrl}/exercises/${exerciseId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                exercises: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the exercise')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

