const errorHadler = (err, req, res, next) =>{
    console.error('error in request:', err.message)
    return res.status(err.status || 500).json({
        status: false,
        message: err.message || 'Something went wrong try again later'
    });
}

export default errorHadler