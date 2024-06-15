import styles from './TaskCard.module.css'

export function TaskCard({ id, title, isCompleted, onDeleteSelectedTask, onMarkedSelectedTask }) {
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
                    <i onClick={handleMarkedSelectedTask} className={`${styles['ph-check']} ph-bold ph-check`}></i>
                )
                : (
                    <i onClick={handleMarkedSelectedTask} className={`${styles['ph-circle']} ph-bold ph-circle`}></i>
                )
            }
            <div className={styles.task}>
                {isCompleted
                    ? (
                        <p className={styles['title-no-completed']}>{title}</p>
                    )
                    : (
                        <p className={styles['title-completed']}>{title}</p>
                    )
                }
                <i onClick={handleDeleteSelectedTask} className="ph-bold ph-trash"></i>
            </div>
        </div>
    )
}
