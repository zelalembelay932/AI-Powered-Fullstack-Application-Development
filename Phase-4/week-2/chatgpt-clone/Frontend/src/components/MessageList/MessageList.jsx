import ChatMessage from '../ChatMessage/ChatMessage'
import style from './MessageList.module.css'

const MessageList = ({conversations = []}) => {
  // console.log(conversations);
  return (
    <div className={style.messageList}>
      {conversations.length === 0 ? (
        <div className={style.empty}> What are you working</div>
      ) : (
        conversations.map((msg) => (
          // <h1 key={msg.id || index} > {msg.role}</h1>
          <ChatMessage key={msg.id || index} role={msg.role} content={msg.content} />
        ))
      )}
    </div>  
  );  
  // 330 
}

export default MessageList
