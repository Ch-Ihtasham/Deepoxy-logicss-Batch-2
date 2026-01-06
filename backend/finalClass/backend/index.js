import express from 'express'
import dotenv from 'dotenv/config'
import connectDB from './db/index.js'
import studentRoute from './routes/api/student.route.js'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use('/api/student', studentRoute)

app.get('/', (req, res, next) => {
    try {
        res.send('hello world')
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log('app is running')
        })
    })
    .catch((err) => {
        console.log('error in connection database', err)
    })

