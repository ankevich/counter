import React from "react"
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default App;
