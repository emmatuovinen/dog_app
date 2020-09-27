import Axios from 'axios';

const api = 'http://localhost:8000/';

export async function GetBasicTasks() {
    return await Axios.get(api + './dataPeek').then(response => response.data.dailyTasks)
}

export default function() {}