import { deleteWorkout } from '../../Api/Workout';

export default function DeleteWorkout({ workout }) {

    /* Deletes workoute with id. */
    const handleDelete = () => {
        deleteWorkout(workout.id);
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }

    return (
        <>
            <button className='delete-btn' onClick={handleDelete}>Delete</button>
        </>
    )
}

