import DeleteProgram from './DeleteProgram';
import UpdateProgram from './UpdateProgram';

export default function ProgramItem ({ program }) {
    return (
        <>
            <div className='container item' key={program.id}>
                <span className='container-items'>
                    <h3>{program.name}</h3>
                    <p>{program.category}</p>
                    <button>Details</button>
                </span>
                <span className='container-items'>
                    <DeleteProgram program={program}/>
                    <button>Add</button>
                </span>
            </div>
            
            <UpdateProgram program={program} />
        </>
    )
}

