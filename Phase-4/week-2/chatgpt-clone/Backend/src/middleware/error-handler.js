const errorHadler = (err, req, res, next) =>{
    return res.status(500).json({
        status: false,
        message: 'Something went wrong try again later'
    });
}

export default errorHadler