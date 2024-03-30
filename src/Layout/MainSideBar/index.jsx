import React from 'react'
import styles from './styles.module.css'
import { TiDeviceDesktop } from "react-icons/ti";
import { SlSpeedometer } from "react-icons/sl";
import { BiTask } from "react-icons/bi";
import { RxEyeOpen } from "react-icons/rx";
import { GiEvilEyes } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { BsBarChartFill } from "react-icons/bs";
import { BiSolidVideo } from "react-icons/bi";
import SideBarsButton from '../../components/SideBarsButton';
export default function MainSideBar({ avatarImg }) {

    const sideBarButtonData = [
        { icon: <SlSpeedometer />, to: 'speed' }
        , { icon: <BiTask />, to: 'task' },
        { icon: <GiEvilEyes />, to: 'overview' }
        , { icon: <IoIosPeople />, to: 'community' },
        { icon: <BsBarChartFill />, to: 'data' },
        { icon: <BiSolidVideo />, to: 'vido' }
    ]


    return (
        <div className={styles.mainSideBarContainer}>
            <TiDeviceDesktop className={styles.appIcon} />
            <div className={styles.iconBundle}>
                {sideBarButtonData.map((data, index) => {
                    return <SideBarsButton key={index} icon={data.icon} to={data.to} />
                })}
            </div>
            <img src={avatarImg} className='avatarImg' alt="User Image" />
        </div>
    )
}
