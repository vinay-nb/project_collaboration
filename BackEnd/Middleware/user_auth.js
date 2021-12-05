const jwt = require('jsonwebtoken');

// ----------user authetication with key-----------
const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'M(vB)<^&0a@');
        req.user = decode
        next()
    } catch(error) {
        if(error == 'TokenExpiredErrror') {
            res.status(401).json({
                message: 'token expired'
            })
        } else {
            res.json({
                message:'authentication failed'
            })
            console.log('error in user_auth file', error)
        }
       
    }
}

module.exports = {authenticate};