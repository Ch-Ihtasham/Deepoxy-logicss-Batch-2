import express from 'express'
import 'dotenv/config'
import blog from './routes/blog.js'

const app = express()
const port = process.env.PORT || 4000

app.use(express.static('public'))
app.use(express.json())

// app.use((req, res, next) => {
//     console.log('middle ware one')
//     next()
// })
// app.use((req, res, next) => {
//     console.log('middle ware two')
//     next()
// })

app.use('/blog', blog)
app.get('/', (req, res) => {
    res.send('hello world')
})
app.use((err, req, res, next) => {

    res.json({
        statusCode: err.statusCode,
        message: err.message
    })
})
app.listen(port, () => {
    console.log(`app is listing on port ${port}`)
})