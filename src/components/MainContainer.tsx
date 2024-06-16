import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { TaskProps } from './hooks/TasksData';
import useTaskData from './hooks/TasksData'

import { TaskCard } from './TaskCard'

import styles from './MainContainer.module.css'

export function MainContainer() {
    const [listTask, setListTask] = useTaskData()
    const [newtask, setNewTask] = useState('')

    const taskCompletedCount = listTask.reduce((count: number, task: TaskProps) => {
        if (task.isCompleted) {
            count++
        }
        return count
    }, 0)

    function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const Task = {
            id: uuidv4(),
            title: newtask,
            isCompleted: false,
        }
        console.log(Task.title)
        if (Task.title === '') {
            return alert('O preenchimento do campo é obrigatório.')
        }
        setListTask([...listTask, Task])
        setNewTask('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    function deleteSelectedTask(taskToDelete: string) {
        const taskWithoutDeletedOne = listTask.filter((task: TaskProps) => {
            return task.id !== taskToDelete
        })

        setListTask(taskWithoutDeletedOne)
    }

    function MarkedSelectedTask(taskToMarked: string) {
        const updatedTaskList = listTask.map((task: TaskProps) => {
            let completed = false
            if (task.id === taskToMarked) {
                if (task.isCompleted === true) {
                    completed = false
                } else {
                    completed = true
                }
                return { ...task, isCompleted: completed }
            }
            return task
        })
        setListTask(updatedTaskList)
    }

    return (
        <main className={styles.container}>
            <form onSubmit={handleCreateNewTask} className={styles.inputTextContainer}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    value={newtask}
                    onChange={handleNewTaskChange}
                    className={styles.inputText}
                />
                <button type='submit'>
                    Criar
                </button>
            </form>

            <div className={styles.tasksContainer}>
                <header>
                    <div className={styles.createdTasks}>
                        <p>Tarefas criadas</p>
                        <span>{listTask.length}</span>
                    </div>
                    <div className={styles.completedTasks}>
                        <p>Concluídas</p>
                        <span>{taskCompletedCount} de {listTask.length}</span>
                    </div>
                </header>
                <main>
                    {listTask.map((task: TaskProps) => {
                        return (
                            <TaskCard
                                id={task.id}
                                title={task.title}
                                isCompleted={task.isCompleted}
                                onDeleteSelectedTask={deleteSelectedTask}
                                onMarkedSelectedTask={MarkedSelectedTask}
                            />
                        )
                    })}
                </main>
            </div>
        </main>
    )
}
