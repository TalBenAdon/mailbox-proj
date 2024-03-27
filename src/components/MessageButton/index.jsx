import React from 'react'
import styles from './styles.module.css'
import { HiMail } from "react-icons/hi";
export default function MessageButton({ title, icon, onclick }) {
    return (
        <button className={styles.buttonContainer}>
            <div ><HiMail className={styles.icon} /></div>
            <div>New message</div>
        </button>

    )
}
