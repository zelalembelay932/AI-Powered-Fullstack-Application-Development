import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Alert  from './components/Alert/Alert'
import FirstSection from './components/FirstSection/FirstSection'
import SecondSection from './components/SecondSection/SecondSection'
import ThirdSection from './components/ThirdSection/ThirdSection'
import FourthSection from './components/FourthSection/FourthSection'
import FifthSection from './components/FifthSection/FifthSection'

function App() {
  return (
    <>
      <Header />
      <Alert/>
      <FirstSection/>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </>
  )
}

export default App
