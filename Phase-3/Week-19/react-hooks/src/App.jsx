import { useState } from 'react'

import './App.css'
import ObjStateEx from './components/ExampComp/ObjStateEx'
// import ExampComp from './components/ExampComp/ExampComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ExampComp /> */}
    <ObjStateEx />
    </>
  )
}

export default App
