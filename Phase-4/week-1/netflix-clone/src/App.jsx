import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import DisplayRow from './Components/DesplayRow/DisplayRow'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner/>
      <DisplayRow/>
      <Footer/>
    </>
  )
}

export default App
