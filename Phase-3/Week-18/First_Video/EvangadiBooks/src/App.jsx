import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ProductList />
    </>
  )
}

export default App
