import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchData from './components/FetchData'

function App() {
  const [count, setCount] = useState(0)
  let [array, setArray] = useState([
    {
      id: 1,
      name: 'ihtasham',
      class: 10
    },
    {
      id: 2,
      name: 'ali',
      class: 11
    },
    {
      id: 3,
      name: 'bilal',
      class: 12
    },
    {
      id: 4,
      name: 'Dr bilal',
      class: 12
    },
    {
      id: 5,
      name: 'Mr bilal',
      class: 12
    },

  ])


  return (
    <>
      <div>
        <div>Id:{array[0].id}</div>
        <div>Name{array[0].name}</div>
        <div>Class:{array[0].class}</div>
      </div>
      <div>
        <div>Id:{array[1].id}</div>
        <div>Name{array[1].name}</div>
        <div>Class:{array[1].class}</div>
      </div>
      <div>
        <div>Id:{array[2].id}</div>
        <div>Name{array[2].name}</div>
        <div>Class:{array[2].class}</div>
      </div>


      {array.map((v, i, a) => {
        return (
          <div key={i} >
            <div>Id:{v.id}</div>
            <div>Name{v.name}</div>
            <div>Class:{v.class}</div>
          </div>
        )
      })}
      {/* this is a filter method  */}
      {
        array.filter((v) => v.class > 11).map((v) => {
          return (
            <div key={v.id} style={{ border: '2px solid black' }} >
              <div>Id:{v.id}</div>
              <div>Name{v.name}</div>
              <div>Class:{v.class}</div>
            </div>
          )
        })
      }

      <FetchData />
    </>
  )
}

export default App
