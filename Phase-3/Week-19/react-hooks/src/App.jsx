import { useState } from 'react'

import './App.css'
import ExampComp from './components/ExampComp/ExampComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExampComp />
    </>
  )
}

export default App
