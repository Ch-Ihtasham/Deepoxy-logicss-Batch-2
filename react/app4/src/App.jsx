import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [fName, setFName] = useState('')

  const [form, setForm] = useState({
    name: '',
    fatherName: '',
    phone: '',
    clas: ''
  })

  function changeForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
      // phon: 
    })

  }


  return (
    <>
      {/* <form onSubmit={(e) => {
        e.preventDefault()
        alert('hello world')
      }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
        <input type="text" name="" id="" placeholder='father name' value={fName} onChange={(e) => setFName(e.target.value)} />
        <button type='submit'>Submit</button>
        {name}
      </form> */}

      <form action="" onSubmit={(e) => {
        e.preventDefault()
        console.log(form)
        setForm({
          name: '',
          fatherName: '',
          phone: '',
          clas: ''
        })
      }}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={form.name} onChange={changeForm} id='name' required/> <br />
        <label htmlFor="">Father Name</label>
        <input type="text" name='fatherName' value={form.fatherName} onChange={changeForm} /><br />
        <label htmlFor="">Phone</label>
        <input type="text" name='phone' value={form.phone} onChange={changeForm} /> <br />
        <label htmlFor="">Class</label>
        <input type="text" name='clas' value={form.clas} onChange={changeForm} />
        <input type="submit" value="Submit" />

      </form>
    </>
  )
}

export default App
