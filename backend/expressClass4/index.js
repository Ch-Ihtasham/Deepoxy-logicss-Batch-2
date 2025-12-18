import express from 'express'
import 'dotenv/config'
const app = express()

const port = process.env.PORT || 5000
console.log(port)
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/blog', (req, res) => {
    res.status(200)
    // res.send('this is our blog page')
    res.json({
        name: 'ihtasham',
    })
})

app.listen(port, () => {
    console.log('app is listing')
})