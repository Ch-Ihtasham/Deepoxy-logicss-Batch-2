import express from 'express'
const route = express.Router()
import blogData from '../data/blogData.js'

// route.use(express.json())

route.get('/', (req, res) => {
    // res.send('Displaying all blogs')
    res.status(200).json(blogData)
})

route.post('/', (req, res) => {
    const { username, password } = req.body
    // const username = req.body.username
    // const password = req.body.password
    if (username === 'ihtasham' && password === 1234) {
        res.send('login success')
    }
    else {
        res.send('invalid login')
    }


    // res.send('blog added')
})

route.delete('/:id', (req, res) => {
    // const data = blogData.filter(v => v.id === Number(req.params.id))
    // if (data.length === 0) {
    //     return res.send('Invalid ID:')
    // }
    // else {
    //     res.send('blog deleted')
    // }
    const id = Number(req.params.id)
    const data = blogData.filter(v => v.id === id)
    if (isNaN(id)) {
        res.status(404).json({
            success: false,
            message: 'Input a number'
        })
    }
    if (data.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'Invalid Id'
        })
    }
    res.status(200).json({
        success: true,
        message: 'Blog Deleted'
    })
})

export default route
