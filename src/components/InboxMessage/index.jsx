import React, { useState } from 'react'
import styles from './styles.module.css'
import defaultImg from '../../assets/defaultImg.jpg'
import MessageEllipsis from '../MessageEllipsis'
import { BsFillStarFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
export default function InboxMessage({ avatarImg, userName, msgPreview, sentTime, to }) {

    const [isFavorite, setIsFavorite] = useState(false)


    // const defaultTime = '4:20'
    // const defaultUser = "Tal Ben Adon"
    // const defaultPreview = "Hey, I really need these documents by tomorrow."
    // const defaultTo = '/tal-ben-adon'

    const clickFavorite = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsFavorite(!isFavorite)
        return
    }
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.inboxMessageContainer}` : styles.inboxMessageContainer}
        >
            <img src={avatarImg} className={styles.avatarImg} alt="person image" />
            <div className={styles.textContainer}>
                <div className={styles.userName}>
                    {userName}
                </div>
                <div className={styles.previewText}>
                    {msgPreview}
                </div>
            </div>
            <div className={styles.msgTimestampsFavorites}>
                <div className={styles.msgTime}>{sentTime}</div>
                <button onClick={clickFavorite} type='button'>
                    <BsFillStarFill className={isFavorite ? styles.activeStarIcon : styles.starIcon} />
                </button>
            </div>
        </NavLink>
    )
}
