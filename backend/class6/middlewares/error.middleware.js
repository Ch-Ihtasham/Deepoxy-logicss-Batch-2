const errorMiddlewar = (err, req, res, next) => {
    const statusCode = err.statusCode || 5000
    res.json({
        statusCode: statusCode,
        message: err.message || 'Internal Server Error'
    })
}