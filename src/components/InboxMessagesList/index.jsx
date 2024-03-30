import React from 'react'
import styles from './styles.module.css'
import InboxMessage from '../InboxMessage'
import SearchBar from '../SearchBar'
export default function InboxMessagesList({ conversationsList, setReadMsg, readMsg }) {
    return (
        <div className={styles.messagesListContainer}>
            <SearchBar />
            <hr className={styles.topHr} />
            {conversationsList.map((data, index) => {
                return <InboxMessage key={index}
                    avatarImg={data.defaultImg}
                    userName={data.defaultUserName}
                    msgPreview={data.defaultMsgPreview}
                    sentTime={data.defaultHour}
                    to={data.defaultTo}
                    setReadMsg={setReadMsg}
                    readMsg={readMsg}
                />
            })}
        </div>
    )
}
