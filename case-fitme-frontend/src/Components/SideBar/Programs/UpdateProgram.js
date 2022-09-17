import { updateProgram } from '../../Api/Program';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export default function UpdateProgram({ program }) {

    const { handleSubmit } = useForm()
    const [name, setName] = useState(program.name);
    const [category, setCategory] = useState(program.category);

    const onUpdate = () => {
        program.name = name;
        const newProgram = {
            name: name,
            category: program.category
        }
        updateProgram(program, program.id);
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }

    /* Methods that sets the value from the form. */
    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }


    return (
        <>
            {/* Form that updates program. */}
            <form className='updateForm' onSubmit={handleSubmit(onUpdate)}>
                <input className='input-form' type="text" name="name" value={name} onChange={event => handleName(event)} />
                <div id={program.id}>
                    <input className='input-form' type="text" name="type" value={category} onChange={event => handleCategory(event)} />{/* Contains null value. */}
                </div>
                <button className='save-btn' type="submit" onClick={onUpdate} value={program.id}>Save</button>
            </form>
        </>
    )
}

