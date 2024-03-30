import React, { useState } from 'react'
import styles from './styles.module.css'
// import QuillEditor from '../QuillEditor'

// export default function MessageInputBox() {
//     const [editorContent, setEditorContent] = useState('')

//     const handleContentChange = (content) => {
//         setEditorContent(content)
//     }

//     return (
//         <div className={styles.msgEditorContainer}>
//             <QuillEditor value={editorContent} onChange={handleContentChange} />
//             {/* <div dangerouslySetInnerHTML={{ __html: editorContent }} /> */}
//         </div>
//     )
// }
export default function MessageInputBox() {
    return (
        <div>
            <textarea name="inboxMsg" className={styles.input} placeholder='Write your message here' />
        </div>
    )
}
