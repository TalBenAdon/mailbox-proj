import React from 'react'
import Layout from './Layout'
import MessageButton from './components/MessageButton'
import InboxMessage from './components/InboxMessage'
import InChatMessage from './components/InChatMessage'
import OpenedMessage from './components/OpenedMessage'
import defaultImg from '../src/assets/defaultImg.jpg'
export default function App() {
  const fakeData = {
    defaultUserName: "Tal Ben Adon",
    defaultMsgPreview: "Hey, I really need these documents bggggggggggg gggggggggggg ggggggggg gggggggggggg gggggggggg gggggggggggggggg gggggggggggg ggggggggg ggggg ggggggggggggggggggggggggg ggggggy tomorrow.",
    defaultDate: "24.3.2024",
    defaultHour: "4:20",
    defaultTo: '/tal-ben-adon',
    defaultImg
  }
  return (
    <>
      {/* <Layout /> */}
      <MessageButton />

      <InboxMessage avatarImg={fakeData.defaultImg} userName={fakeData.defaultUserName} msgPreview={fakeData.defaultMsgPreview} sentTime={fakeData.defaultHour} to={fakeData.defaultTo} />
      <OpenedMessage avatarImg={fakeData.defaultImg} userName={fakeData.defaultUserName} msg={fakeData.defaultMsgPreview} hour={fakeData.defaultHour} date={fakeData.defaultDate} />
      <InChatMessage avatarImg={fakeData.defaultImg} userName={fakeData.defaultUserName} msg={fakeData.defaultMsgPreview} hour={fakeData.defaultHour} date={fakeData.defaultDate} />
    </>
  )
}

