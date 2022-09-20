import DeleteProgram from './DeleteProgram';
import ProgramDetails from './ProgramDetails';
import UpdateProgram from './UpdateProgram';

export default function ProgramItem ({ program }) {
    /* Prints out Programs.*/
    return (
        <>
            <div className='container item' key={program.id}>
                <span className='container-items'>
                    <h3>{program.name}</h3>
                    <p>{program.category}</p>
                    <button onClick={showDetails}>Details</button>
                </span>
                <span className='container-items'>
                    <DeleteProgram program={program}/>
                    <button onClick={showEdit}>Edit</button>
                </span>
            </div>
            <ProgramDetails program={program}/>
            <UpdateProgram program={program} />
        </>
    )
}

const showDetails = () => {
    document.getElementById("prog-detail").style.display = "block";
}
const showEdit = () => {
    document.getElementById("update-prog").style.display = "block";
}