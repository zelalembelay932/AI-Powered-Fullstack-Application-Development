import { useState, useEffect } from "react";
import './App.css'
import ChatHeader from './components/ChatHeader/ChatHeader'
import MessageList from './components/MessageList/MessageList'
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios'

// aman godana acadami   
function App() { 
  const [conversations, setConversations] = useState([])

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

  useEffect(()=>{
    fetchConversations();
  }, []);
  


  return ( 
    <div className='app'>
      {/* Sidebardebar */}
    <Sidebar/>
      <main className='main'>
        {/* chatHeader */}
          <ChatHeader/>
        {/* messageList */}
          <MessageList conversations={conversations}/>
        {/* ChatInput */}
      </main>
    </div>
  )
}

export default App


