import { useState } from "react"

export default function Counter(){

  const [count,setCount] = useState(0)

  const addCount = (item) => {
    setCount(count + item)
  }

  return <div>
      <p> count :  {count} </p>
      <button onClick = {() => addCount(5)} > add Count </button>
  </div>

}