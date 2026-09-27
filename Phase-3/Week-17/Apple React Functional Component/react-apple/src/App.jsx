import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Alert  from './components/Alert/Alert'

function App() {
  return (
    <>
      <Header />
      <Alert/>
      <Footer />
    </>
  )
}

export default App
