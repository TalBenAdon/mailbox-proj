import React, { useState } from 'react'
import styles from './styles.module.css'
import { BsThreeDotsVertical } from "react-icons/bs";
export default function DropDownOptions() {
    const [isVisible, setIsVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsVisible(true)
    }
    const handleMouseLeave = () => {
        setIsVisible(false)
    }
    return (
        <div>
            <div className={styles.menuWrapper}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}>
                <button className={styles.dotsSyle}><BsThreeDotsVertical /></button>
            </div>
            {isVisible && <div className={styles.dropDownMenu}>
                <ul>
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                </ul>
            </div>}
        </div>
    )
}
