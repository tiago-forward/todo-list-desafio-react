import styles from './Task.module.css'

export function Task({ id, title, isCompleted }) {
    return (
        <div className={styles.container} key={id}>
            {isCompleted
                ? (
                    <i className={`${styles['ph-check']} ph-bold ph-check`}></i>
                )
                : (
                    <i className={`${styles['ph-circle']} ph-bold ph-circle`}></i>
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
                <i className="ph-bold ph-trash"></i>
            </div>
        </div>
    )
}
