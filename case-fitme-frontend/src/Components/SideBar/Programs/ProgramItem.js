import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { deleteProgram, updateProgram } from '../../Api/Program';


const ProgramItem = ({ program }) => {

    const { handleSubmit} = useForm()
    const [name, setName] = useState(program.name);
    const [category, setCategory] = useState(program.category);

    const onUpdate = () => {
        program.name = name;
        const newProgram = {
            name: name,
            category: program.category
        }
        updateProgram(program, program.id)
        document.getElementById("details").style.display = "none"
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleDelete = () => {
        deleteProgram(program.id);
        setTimeout(function(){
            window.location.reload();
            }, 1000);
    }

    if (program.id != null) {
        return (
            <>
                <div className="item" key={program.id}>
                    <p>{program.name}</p>

                    <div>
                        <input className='input-number' type="number" min="1" placeholder="ex: 8" />
                    </div>
                    <span>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleAddToWork}>Add</button>
                    </span>
                </div>
                <form onSubmit={handleSubmit(onUpdate)}>
                    <input className='input-form' type="text" name="name" value={name} onChange={event => handleName(event)} />
                    <div id={program.id}>
                        <input className='input-form' type="text" name="type" value={category} onChange={event => handleCategory(event)} />
                    </div>
                    <button type="submit" onClick={onUpdate} value={program.id}>Save</button>
                </form>
            </>
        )
    } else {
        return (
            <div className="weekly-schedule" key="0">
                <div className="weekly-todo">
                    <p>No archived yet!</p>
                </div>
            </div>
        )
    }
}

export default ProgramItem;

const handleAddToWork = () => {
    alert("Added to program");
}
