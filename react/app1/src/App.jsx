import { useState } from 'react'


function App({ name }) {
  const [count, setCount] = useState(0)
  const [a, setA] = useState(10)

  function increment() {
    setA(a + 1)
    a = a + 1
    console.log(a)
  }

  return (
    <>
      <div>name:{name}</div>
      this is my main hero section{a}
      <button onClick={increment}> add</button>
    </>
  )
}

export default App
