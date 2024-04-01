import React, { useState } from 'react'
import styles from './styles.module.css'
import Content from './Content'
import MailboxSidebar from './MailboxSidebar'
import MainSideBar from './MainSideBar'
import defaultImg from '../assets/defaultImg.jpg'
import InboxMessagesList from './InboxMessagesList'
import { Outlet, Route, Routes } from 'react-router-dom'
// import OpenedMessage from '../components/OpenedMessage'


export default function Layout() {



    return (
        <Routes>
            <Route path='login' element={<h1>login</h1>} />
            <Route element={<MainSideBar />}>
                <Route index element={<>home</>} />
                <Route path='messages' element={<><MailboxSidebar /><Outlet /></>} >
                    <Route path=':messageType' element={<><InboxMessagesList /><Outlet /></>}>
                        <Route path=':emailId' element={<Content />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}
