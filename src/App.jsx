import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import MessageButton from './components/MessageButton'
import InboxMessage from './components/InboxMessage'
import InChatMessage from './components/InChatMessage'
import OpenedMessage from './components/OpenedMessage'
import defaultImg from '../src/assets/defaultImg.jpg'
import InboxMessagesList from './components/InboxMessagesList'
import MainSideBar from './Layout/MainSideBar'
import MailboxSidebar from './Layout/MailboxSidebar'
export default function App() {
  const [readMsg, setReadMsg] = useState(false)
  // useEffect(() => {
  //   setReadMsg(true)
  //   console.log(readMsg);
  // }, [])
  const fakeData = {
    defaultUserName: "Tal Ben Adon",
    defaultMsgPreview: "Hey, I really need these documents bggggggggggg gggggggggggg ggggggggg gggggggggggg gggggggggg gggggggggggggggg gggggggggggg ggggggggg ggggg ggggggggggggggggggggggggg ggggggy tomorrow.",
    defaultDate: "24.3.2024",
    defaultHour: "4:20",
    defaultTo: '/0',
    defaultImg
  }

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
    <>
      {/* <Layout /> */}
      <MessageButton />

      {/* <InboxMessage  avatarImg={fakeData.defaultImg} userName={fakeData.defaultUserName} msgPreview={fakeData.defaultMsgPreview} sentTime={fakeData.defaultHour} to={fakeData.defaultTo} /> */}
      <OpenedMessage avatarImg={fakeData.defaultImg} userName={fakeData.defaultUserName} msg={fakeData.defaultMsgPreview} hour={fakeData.defaultHour} date={fakeData.defaultDate} />
      <InChatMessage avatarImg={fakeData.defaultImg} userName={fakeData.defaultUserName} msg={fakeData.defaultMsgPreview} hour={fakeData.defaultHour} date={fakeData.defaultDate} />
      <InboxMessagesList conversationsList={fakeDataList} setReadMsg={setReadMsg} readMsg={readMsg} />
      <MainSideBar avatarImg={fakeData.defaultImg} />
      <MailboxSidebar readMsg={readMsg} />
    </>
  )
}

