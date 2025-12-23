import express from 'express'
import 'dotenv/config'
import blog from './routes/blog.js'

const app = express()
const port = process.env.PORT || 4000


// middlewares
app.use(express.json())

// application level middleware / custom middlware e.g:autho 

app.use((req, res, next) => {
    console.log('middleware one')
    next()
})

app.use('/blog',blog)
app.get('/', (req, res, next) => {
    // try {
    //     res.send('Home page')
    // } catch (error) {
    //     // res.status(error.statusCode).send('Internal Server Error', error)    
    // }
    // next(err)
    res.send('hello world')

})

// to check the route 

app.use((req, res) => {
    res.status(404).send('Page Not found')
})

// error middleware 

app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).send('something went wrong')
})


app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})
