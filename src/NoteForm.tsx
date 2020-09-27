import React, { useState } from 'react';

interface Props {
    addNote: AddNote;
}

export const NoteForm: React.FC<Props> = ({addNote}) => {
    const [info, setInfo] = useState('')

    const onChange = (e:any) => {
        localStorage.setItem('storedNotes', e.target.value)

        setInfo(e.target.value)
    }

    return (
        <form>
            <input 
            type='text'
            value={info}
            onChange={onChange}
            />
            <button 
            type='submit'
            onClick={e => {
                e.preventDefault();
                addNote(info);
                setInfo('');
            }}
            >
            Add note
            </button>
        </form>
    )
}