import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Alert  from './components/Alert/Alert'
import FirstSection from './components/FirstSection/FirstSection'

function App() {
  return (
    <>
      <Header />
      <Alert/>
      <FirstSection/>
      <Footer />
    </>
  )
}

export default App
