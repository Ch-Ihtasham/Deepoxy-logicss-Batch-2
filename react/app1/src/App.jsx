import { useEffect, useRef, useState } from 'react'


function App({ name }) {
  const [count, setCount] = useState(0)
  const [a, setA] = useState(10)
  let b = useRef(0)
  function increment() {
    // setA(a + 1)
    b.current = b.current + 1
    // a = a + 1
    // console.log(a)
  }
  // useEffect(() => {
  //   alert('hello')
  // }, [])
  return (
    <>
      <div>name:{name}</div>
      this is my main hero section{b.current}
      <button onClick={() => {
        b.current = b.current + 1
      }}> add</button>
    </>
  )
}

export default App
