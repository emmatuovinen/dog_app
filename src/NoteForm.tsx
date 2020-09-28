import React, { useState } from 'react';
import { SendNote } from './dogApi';


interface Props {
    addNote: AddNote;
}

export const NoteForm: React.FC<Props> = ({addNote}) => {
    const [info, setInfo] = useState('')

    const onChange = (e:any) => {
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
                console.log('info', info)
                e.preventDefault();
                addNote(info);
                SendNote(info)
                setInfo('');
            }}
            >
            Add note
            </button>
        </form>
    )
}