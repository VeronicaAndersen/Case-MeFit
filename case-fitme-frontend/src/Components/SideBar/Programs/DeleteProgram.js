import { deleteProgram } from '../../Api/Program';

export default function DeleteProgram({ program }) {

    /* Deletes programe with id. */
    const handleDelete = () => {
        deleteProgram(program.id);
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

