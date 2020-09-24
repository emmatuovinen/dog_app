import React from 'react';
import { DogNote } from './DogNote'

interface Props {
    notes: Note[];
}

export const NotesList: React.FC<Props> = ({notes}) => {
    return (
        <ul>
            {notes.map(note => (
                <DogNote key={note.info} note={note}/>
            ))}
        </ul>
    )
}