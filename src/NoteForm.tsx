import React, { useState } from 'react';

interface Props {
    addNote: AddNote;
}

export const NoteForm: React.FC<Props> = ({addNote}) => {
    const [info, setInfo] = useState('')

    return (
        <form>
            <input 
            type='text'
            value={info}
            onChange={e => {setInfo(e.target.value)}}
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