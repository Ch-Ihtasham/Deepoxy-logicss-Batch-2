import express from 'express'
import 'dotenv/config'
const app = express()

const port = process.env.PORT || 4000
const books = [
    { id: 1, title: "The Hobbit", genre: "Fantasy" },
    { id: 2, title: "1984", genre: "Sci-Fi" },
    { id: 3, title: "Dune", genre: "Sci-Fi" }

]

app.get('/', (req, res) => {
    res.send('this is our home page')
})
app.get('/contact', (req, res) => {
    res.send('this is our contacts us page')
})
app.get('/blog', (req, res) => {
    // res.send('this is our blog page and Showing All blogs')
    const query = req.query.title
    const id = req.query.id

    if (query) {
        const result = books.filter(v => v.title === query)
        console.log(id)
        return res.json(result)
    }
    res.json(books)
})


// app.get('/blog/:slug', (req, res) => {
//     res.send(`this is our ${req.params.slug}`)
//     const filterBooks = books.filter(v => v.title === req.params.slug)
//     res.json(filterBooks)
// })

// app.get('/blog/:id', (req, res) => {
// res.send(`this is our ${req.params.slug}`)
// const filterBooks = books.filter(v => v.id === req.params.id)
// res.json(filterBooks)
// })

app.get('/blog/:identifer', (req, res) => {
    const value = req.params.identifer;
    const result = isNaN(value) ? books.filter(v => v.title === value) : books.filter(v => v.id === Number(value))
    if (result.length === 0) {
        return res.status(404).json({
            success: false,
            message: "Blog not found"
        });
    }
    res.status(200).json({
        success: true,
        data: result
    });
    // res.json(result)
})




// app.get('/blog/:id', (req, res) => {
//     res.send(`this is our ${req.params.id}`)
// })


app.listen(port, () => {
    console.log(`App is listing on localhost ${port}`)
})
