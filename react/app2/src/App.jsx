import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetching from './components/Fetching'

function App() {
  const [count, setCount] = useState(0)
  let [login, setLogin] = useState(false)
  const [a, setA] = useState(0)

  let b = useRef(0);

  let colorRef = useRef()
  let inputRef = useRef()

  function increment() {
    setA(a + 1)

  }
  function x() {
    b.current = b.current + 1
    console.log(b.current)
  }

  // this will execute every time when state change no matter which state change 
  useEffect(() => {

  }, [])
  // this is occour only when count or a value change 
  // useEffect(() => {
  //   alert('hello world')
  // }, [count, a])

  return (
    <>

      <div className="card">
        <input type="text" ref={inputRef} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={increment}>a{a}</button>

        <button onClick={x} ref={colorRef}>value of b {b.current}</button>

        <button onClick={() => {
          colorRef.current.style.backgroundColor = 'red';
          inputRef.current.focus()
        }}>bg changer</button>
        {login ? <div>User is login</div> : <div>User not loged in</div>}
        <button onClick={() => {
          setLogin(prev => !prev)
        }}>{login ? 'Logout' : 'Login'}</button>
        {login && <div>User is login</div>}


      </div>
      <Fetching />
    </>
  )
}

export default App
