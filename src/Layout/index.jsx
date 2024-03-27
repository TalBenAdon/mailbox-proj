import React from 'react'
import styles from './styles.module.css'
import Content from './Content'
import SideBar from './SideBar'
import MailboxSidebar from './MailboxSidebar'
import MessagesSidebar from './MessagesSidebar'


export default function Layout() {
    return (
        <div>
            <SideBar />
            <MailboxSidebar />
            <MessagesSidebar />
            <Content />
        </div>
    )
}
