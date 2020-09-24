import React from 'react';

interface Props {
    note: Note;
}

export const DogNote: React.FC<Props> = ({ note }) => {
    return(
        <li>
        <div 
        style= {{ textDecoration: 'bold', color: 'orange'}}
        >
             {note.info}
        </div>
    </li>
    )
}