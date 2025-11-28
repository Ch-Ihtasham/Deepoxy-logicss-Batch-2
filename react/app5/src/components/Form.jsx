import React, { useState } from 'react'

export default function Form() {
    // const [phone, setPhone] = useState('123')
    // function chnageForm(e) {
    //     setPhone(e.target.value)
    // }

    const [form, setForm] = useState({
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: ''
    })
    function chnageForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            {/* this is for single input box */}
            {/* <input type="text" value={form.A}  onChange={(e) => { setphone(e.target.value) }} /> <br /> */}

            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(form)
            }}>
                <input type="text" value={form.a} name='a' onChange={chnageForm} /> <br />
                <input type="text" value={form.b} name='b' onChange={chnageForm} /> <br />
                <input type="text" value={form.c} name='c' onChange={chnageForm} /> <br />
                <input type="text" value={form.d} name='d' onChange={chnageForm} /> <br />
                <input type="text" value={form.e} name='e' onChange={chnageForm} /> <br />
                <input type="text" value={form.f} name='f' onChange={chnageForm} /> <br />
                <button type='submit'>submit</button>
            </form>
            {/* your phone no: {phone} */}
            {form.a}
        </div>
    )
}
