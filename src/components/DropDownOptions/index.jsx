import React, { useState } from 'react'
import styles from './styles.module.css'
import { BsThreeDotsVertical } from "react-icons/bs";
export default function DropDownOptions() {
    const [isVisible, setIsVisible] = useState(true)

    const handleMouseEnter = () => {
        setIsVisible(true)
    }
    const handleMouseLeave = () => {
        setIsVisible(false)
    }
    return (
        <>
            <button className={styles.dotsSyle} onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}><BsThreeDotsVertical />
                {isVisible &&
                    <ul className={styles.dropDownMenu}>
                        <li>menu1</li>
                        <li>menu2</li>
                        <li>menu3</li>
                    </ul>
                }
            </button>
        </>
    )
}
