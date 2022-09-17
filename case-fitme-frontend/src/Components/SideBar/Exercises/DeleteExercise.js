import { deleteExercise } from '../../Api/Exercise';

export default function DeleteExercise({ exercise }) {

    /* Deletes exercisee with id. */
    const handleDelete = () => {
        deleteExercise(exercise.id);
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
