import { FormEvent } from 'react'
import { Task } from './Task'

import useTaskData from './hooks/TasksData'

import styles from './MainContainer.module.css'

export function MainContainer() {
    const [listTask, setListTask] = useTaskData()

    function handleCrateNewTask(event: FormEvent) {
        event.preventDefault()
    }

    return (
        <main onSubmit={handleCrateNewTask} className={styles.container}>
            <form className={styles.inputTextContainer}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
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
                        <span>5</span>
                    </div>
                    <div className={styles.completedTasks}>
                        <p>Concluídas</p>
                        <span>2 de 5</span>
                    </div>
                </header>
                <main>
                    {listTask.map(task => {
                        return (
                            <Task
                                id={task.id}
                                title={task.title}
                                isCompleted={task.isCompleted}
                            />
                        )
                    })}
                </main>
            </div>
        </main>
    )
}
