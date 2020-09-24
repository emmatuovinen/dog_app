interface Task {
    text: string;
    complete: boolean;
}

interface Note {
    info: string;
}

type ToggleTask = (selectedTask: Task) => void;

type AddNote = (info: string) => void;