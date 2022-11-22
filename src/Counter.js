import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)  
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
    }
    function reset(){
      setCount(0)
    }
    function handleDelta(event){
      console.log(event);
      setDelta(Number(event.target.value))
    } 

    return (
      <div>
        <h1>Counter</h1>
        <input type = "number" value = {delta} onChange = {handleDelta}/>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Reset counter</button>
      </div>
    );
  }
  
  export default Counter;