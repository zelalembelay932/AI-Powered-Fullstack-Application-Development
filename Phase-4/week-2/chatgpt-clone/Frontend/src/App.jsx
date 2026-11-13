import { useState, useEffect, useRef } from "react";
import './App.css'
import ChatHeader from './components/ChatHeader/ChatHeader'
import MessageList from './components/MessageList/MessageList'
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios'
import ChatInput from "./components/ChatInput/ChatInput";

// aman godana acadami   
function App() { 
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const lastMessageRef = useRef(null);

  async function fetchConversations() {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/api/chat/conversations",
      );
      setConversations(data.data);
    } catch (error) {
      console.log(error);
    }
  } 


  async function handleSubmit(question) {
    if (!question.trim()) {
      return;
    }
    
    const tempQuestion = {
      id: Date.now(),
      content: question.trim(),
      role: 'user'
    };
    setConversations(prev => [...prev, tempQuestion])

    try {
      setIsLoading(true)
      const {data} = await axios.post('http://localhost:3001/api/chat/conversations', 
      {
        question: question.trim(),
      });

      setConversations(prev => [...prev, data?.data?.assistantConversation]);

      // console.log(data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    

  }


  useEffect(()=>{
    fetchConversations();
  }, []);
  
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversations, isLoading]);


  return (
    <div className="app">
      {/* Sidebardebar */}
      <Sidebar />
      <main className="chat">
        {/* chatHeader */}
        <ChatHeader />
        {/* messageList */}
        <MessageList
          lastMessageRef={lastMessageRef}
          isLoading={isLoading}
          conversations={conversations}
        />
        {/* ChatInput */}
        <ChatInput isLoading={isLoading} handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}

export default App


