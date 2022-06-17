import { useState } from 'react'
import { SpanTimer } from './components/SpanTimer';

import './App.css'

export function App() {
  const zeroPut = n => {
      return ('0' + n).slice(-2);
  }

  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  const timer = () => {
    const date = new Date()

    setHours(zeroPut(date.getHours()))
    setMinutes(zeroPut(date.getMinutes()))
    setSeconds(zeroPut(date.getSeconds()))
  }

  setInterval(timer, 1000)

  return (
    <div className="container">
      <div id="timer">
        <SpanTimer time={hours}/>
        <span>:</span>
        <SpanTimer time={minutes}/>
        <span>:</span>
        <SpanTimer time={seconds}/>
      </div>
    </div>
  )
}