import React from 'react'
import {useState, useRef} from 'react'



export default function App(){

const [timer, setTimer] = useState(0)
const intervalRef = useRef(null);

function startTimer(){

  intervalRef.current = setInterval(() => {
    setTimer((prevTime) => prevTime + 1);
  }, 1000);
};
function stopTimer(){

clearInterval(intervalRef.current);
//intervalRef.current = null;

}
  
return <div>
  <h1>Timer: {timer}</h1>
  <button onClick = {startTimer}>Start</button>
  <button onClick = {stopTimer}>Stop</button>
</div>

}

