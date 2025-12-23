import express from 'express'

const route = express.Router()

route.get('/', (req, res, next) => {
    try {
        res.send("All Blogs")
    }
    catch {
        next(err)
    }
})

route.post('/', (req, res, next) => {
    try {
        const name = req.body.name
        const clas = req.body.clas
        // res.send('blog added')
        if (name === 'ali' && clas === 10) {
            res.status(200).json({
                success: true,
                message: 'login success'
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: 'inavlid username or password'
            })
        }
    }
    catch {
        res.status(400).send('Bad Request')
    }
})

export default route