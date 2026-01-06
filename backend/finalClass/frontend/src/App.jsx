import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    section: ''
  })
  function handelChange(e) {
    setFormData(preV => ({
      ...preV,
      [e.target.name]: e.target.value
    }))
  }
  async function handelForm(e) {
    e.preventDefault()
    await sendData()
    console.log(formData)

  }

  async function sendData() {
    try {
      const response = await fetch('http://localhost:3000/api/student',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            section: formData.section
          })
        }
      )
      const data = response.json()

      if (!response.ok) {
        console.log('failed to send data')
      }
      alert('data send')
    }
    catch (err) {
      console.log('error', err)
    }
  }

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/student')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data)
        setData(data.data)
      })
  }, [])

  async function handelDelete(id) {
    const response = await fetch(`http://localhost:3000/api/student/${id}`,
      {
        method: 'DELETE',
      }
    )
    if (!response.ok) {
      console.log('error')
    }
    alert('data deleted')
  }

  return (
    <div>
      this is our frontend
      <div>
        <form action="" onSubmit={handelForm}>
          <label htmlFor="">Name:</label>  <input type="text" name="name" onChange={handelChange} /> <br />
          <label htmlFor="">phone:</label>  <input type="number" name="phone" onChange={handelChange} /> <br />
          <label htmlFor="">section:</label>  <input type="text" name="section" onChange={handelChange} />
          <button type='submit'>send data</button>
        </form>
      </div>
      <div>
        {data.map((v, i) => (
          <div key={i} style={{ border: '1px solid black' }}>
            <div>Name: {v.name}</div>
            <div>phone: {v.phone}</div>
            <div>section: {v.section}</div>
            <button onClick={ () =>  handelDelete(v._id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
