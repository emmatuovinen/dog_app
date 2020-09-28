import Axios from 'axios';

const api = 'http://localhost:8000/';

export async function GetBasicTasks() {
    return await Axios.get(api + 'dataPeek').then(response => response.data.dailyTasks)
}

export function SendNote(noteBody) {
    console.log('apissa')
    Axios.post(api + 'notes', {info: noteBody}).then(response => {
        console.log(response)
    })
}

export async function GetNotesFromApi() {
    return await Axios.get(api + 'notes').then(response => response.data)
}

export default function() {}