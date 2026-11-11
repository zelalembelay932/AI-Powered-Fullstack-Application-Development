import style from './MessageList.module.css'

const MessageList = ({conversations = []}) => {
  // console.log(conversations);
  return (
    <div className={style.messageList}>
      {
        conversations.length === 0 ? (
          <div className={style.empty}> What are you working</div>
        ) : (
          conversations.map((msg, index) =>(
            <h1 key={msg.id || index} > {msg.content}</h1>
          ))
        )
      }
    </div>
  )
}

export default MessageList
