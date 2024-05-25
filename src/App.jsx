import { useState, useEffect } from 'react'
import Controls from '../components/Controls'
import Display from '../components/Display'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [isRunnig, setIsRunnig] = useState(false);

  function handleStartStop() {
    setIsRunnig(!isRunnig);
  }

  function handleReset() {
    setTime(0);
  }

  useEffect(()=> {
    let interval ;

    if (isRunnig) {
      interval = setInterval(() => {
        {setTime(time+1)}
      },1000);
    }

    return ()=> clearInterval(interval);
  },[time, isRunnig])

  return (
    <>
      <section className="stopwatch">

        <h1>
          React stopwatch
        </h1>

        <Display time={time} />
        <Controls isRunning={isRunnig}
          startstop={handleStartStop} 
            reset={handleReset}
          />
      </section>
    </>
  )
}

export default App
