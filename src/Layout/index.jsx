import React, { useState } from 'react'
import styles from './styles.module.css'
import Content from './Content'
import MailboxSidebar from './MailboxSidebar'
import MainSideBar from './MainSideBar'
import defaultImg from '../assets/defaultImg.jpg'
import InboxMessagesList from './InboxMessagesList'


export default function Layout() {
    const [readMsg, setReadMsg] = useState(false)
    const fakeDataList = [{
        defaultUserName: "Tal Ben Adon",
        defaultMsgPreview: "Hey, I really need these documents bggggggggggg gggggggggggg ggggggggg gggggggggggg gggggggggg gggggggggggggggg gggggggggggg ggggggggg ggggg ggggggggggggggggggggggggg ggggggy tomorrow.",
        defaultDate: "24.3.2024",
        defaultHour: "4:20",
        defaultTo: '/0',
        defaultImg
    }, {
        defaultUserName: "Tal Ben Adon",
        defaultMsgPreview: "Hey, I really need these documents bggggggggggg gggggggggggg ggggggggg gggggggggggg gggggggggg gggggggggggggggg gggggggggggg ggggggggg ggggg ggggggggggggggggggggggggg ggggggy tomorrow.",
        defaultDate: "24.3.2024",
        defaultHour: "4:20",
        defaultTo: '/1',
        defaultImg
    }, {
        defaultUserName: "Tal Ben Adon",
        defaultMsgPreview: "Hey, I really need these documents bggggggggggg gggggggggggg ggggggggg gggggggggggg gggggggggg gggggggggggggggg gggggggggggg ggggggggg ggggg ggggggggggggggggggggggggg ggggggy tomorrow.",
        defaultDate: "24.3.2024",
        defaultHour: "4:20",
        defaultTo: '/2',
        defaultImg
    }, {
        defaultUserName: "Tal Ben Adon",
        defaultMsgPreview: "Hey, I really need these documents bggggggggggg gggggggggggg ggggggggg gggggggggggg gggggggggg gggggggggggggggg gggggggggggg ggggggggg ggggg ggggggggggggggggggggggggg ggggggy tomorrow.",
        defaultDate: "24.3.2024",
        defaultHour: "4:20",
        defaultTo: '/3',
        defaultImg
    }, {
        defaultUserName: "Tal Ben Adon",
        defaultMsgPreview: "Hey, I really need these documents bggggggggggg gggggggggggg ggggggggg gggggggggggg gggggggggg gggggggggggggggg gggggggggggg ggggggggg ggggg ggggggggggggggggggggggggg ggggggy tomorrow.",
        defaultDate: "24.3.2024",
        defaultHour: "4:20",
        defaultTo: '/4',
        defaultImg
    }]
    return (
        <div className={styles.layoutBody}>
            <MainSideBar avatarImg={defaultImg} />
            <MailboxSidebar readMsg={readMsg} />
            <InboxMessagesList conversationsList={fakeDataList} setReadMsg={setReadMsg} readMsg={readMsg} />
            <Content />
        </div>
    )
}
