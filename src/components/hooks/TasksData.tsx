import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

export interface TaskProps {
    id: string
    title: string
    isCompleted: boolean
}

const useTaskData = () => {
    let [listTask, setListTask] = useState<TaskProps[]>([
        {
            id: uuidv4(),
            title: 'Concluir o desafio',
            isCompleted: true,
        },
    ])

    return [listTask, setListTask]
}

export default useTaskData