import React from "react"
import './App.css'
import Card from './components/Card'
import ProgressBar from './components/ProgressBar'

function App() {
    
  return (
    <>
     <h1 className='bg-green-500  m-4 text-white  rounded-3xl p-4'>TailwindCSS Testing</h1><br/>
        <Card username="Vikashgoswami" age="Age 24" btnText="click me" />
        <Card username="ashish sharma"  age="Age 25" btnText="Subscribe me "/>
      <ProgressBar/>
    </>
  )
}

export default App
