import { Bot } from 'lucide-react';
import ChatMessage from '../ChatMessage/ChatMessage'
import style from './MessageList.module.css'

const MessageList = ({ lastMessageRef, isLoading, conversations = [] }) => {
  // console.log(conversations);
  return (
    <div className={style.messages}>
      {conversations.length === 0 ? (
        <div className={style.empty}> What are you working</div>
      ) : (
        conversations.map((msg) => (
          // <h1 key={msg.id || index} > {msg.role}</h1>
          <ChatMessage
            key={msg.id || index}
            role={msg.role}
            content={msg.content}
          />
        ))
      )}

      {isLoading && (
        <div className={style.loadingContainer}>
          <div className={style.loadingAvatar}>
            <Bot size={18} color="white" />
          </div>
          <div className={style.loading}>
            <div className={style.loadingDot}></div>
            <div className={style.loadingDot}></div>
            <div className={style.loadingDot}></div>
          </div>
        </div>
      )}

      <div ref={lastMessageRef}></div>
    </div>
  );
  // 330
};

export default MessageList
