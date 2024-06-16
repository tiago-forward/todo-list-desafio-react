import styles from './TaskCard.module.css'

interface TaskCardProps {
    id: string
    title: string
    isCompleted: boolean
    onDeleteSelectedTask: ((task: string) => void)
    onMarkedSelectedTask: ((task: string) => void)
}

export function TaskCard({ id, title, isCompleted, onDeleteSelectedTask, onMarkedSelectedTask }: TaskCardProps) {
    function handleDeleteSelectedTask() {
        onDeleteSelectedTask(id)
    }

    function handleMarkedSelectedTask() {
        onMarkedSelectedTask(id)
    }

    return (
        <div className={styles.container} key={id}>
            {isCompleted
                ? (
                    <i
                        onClick={handleMarkedSelectedTask}
                        className={`${styles['ph-check']} ph-bold ph-check`}
                        title='Concluída'
                    ></i>
                )
                : (
                    <i
                        onClick={handleMarkedSelectedTask}
                        className={`${styles['ph-circle']} ph-bold ph-circle`}
                        title='Não concluída'
                    ></i>
                )
            }
            <div className={styles.task}>
                {isCompleted
                    ? (
                        <p
                            className={styles['title-no-completed']}
                        >
                            {title}
                        </p>
                    )
                    : (
                        <p
                            className={styles['title-completed']}
                        >
                            {title}
                        </p>
                    )
                }
                <i
                    onClick={handleDeleteSelectedTask} 
                    className="ph-bold ph-trash"
                    title='Excluir tarefa'
                ></i>
            </div>
        </div>
    )
}
