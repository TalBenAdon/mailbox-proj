import React from 'react'
import styles from './styles.module.css'

export default function MessageButton({ title, icon, onclick }) {
    return (
        title === 'Send' ? <button className={styles.buttonContainer} style={{ width: 'fit-content' }}>
            <div>{title}</div>
            <div className={styles.icon}>{icon}</div>
        </button> :
            <button className={styles.buttonContainer} >
                <div className={styles.icon}>{icon}</div>
                <div>{title}</div>
            </button>

    )
}
