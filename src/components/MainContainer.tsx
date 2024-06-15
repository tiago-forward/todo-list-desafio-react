import { FormEvent } from 'react'

import styles from './MainContainer.module.css'

export function MainContainer() {

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
                <button>
                    Criar
                </button>
            </form>

            <div className={styles.tasksContainer}>
                
            </div>
        </main>
    )
}
