import './App.css'
import ChatHeader from './components/ChatHeader/ChatHeader'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='app'>
      {/* Sidebardebar */}
    <Sidebar/>
      <main className='main'>
        {/* chatHeader */}
          <ChatHeader/>
        {/* messageList */}

        {/* ChatInput */}
      </main>
    </div>
  )
}

export default App


// git commit -m "feat(header): create application Chath]Header component, add application branding and title and  implement user profile section"