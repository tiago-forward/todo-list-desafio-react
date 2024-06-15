import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

const useTaskData = () => {
    let [listTask, setListTask] = useState([
        {
            id: uuidv4(),
            title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isCompleted: true
        },
        {
            id: uuidv4(),
            title: 'Concluir o desafio',
            isCompleted: false
        },
        {
            id: uuidv4(),
            title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isCompleted: true
        },
        {
            id: uuidv4(),
            title: 'Concluir o desafio',
            isCompleted: false
        },
    ])

    return [listTask, setListTask]
}

export default useTaskData