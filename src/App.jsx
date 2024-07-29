import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExcelToJson from './components/ExcelToJson'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExcelToJson />
    </>
  )
}

export default App
