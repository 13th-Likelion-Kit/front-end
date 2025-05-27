import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name="김유진" num="20210268" age="24" img="dubu.jpg"/>
    </>
  )
}

export default App
