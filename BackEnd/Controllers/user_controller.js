const { response } = require('express');
const user = require('../Models/user');
const bcrypt = require('bcrypt');
const salt_rounds = 10;
const jwt = require('jsonwebtoken');

// ---------------user registration------------------
const user_signup = async (req, res, next) => {
    // check username and email password already exists
    const userName = req.body.user_name;
    const is_new_userName = await user.is_username_in_use(userName)
    if(!is_new_userName) {
        res.json({
            sucess: false,
            message: 'user name exists'
        })
        console.log('user name exists')
        return false;
    }
    
    const user_email = req.body.email;
    const is_new_user = await user.is_email_in_use(user_email)
    if(!is_new_user) {
        res.json({
            sucess: false,
            message: 'email id exists'
        })
        console.log('email id exists')
        return false;
    }
    // hash password create new collections
    const encrypt_password = bcrypt.hashSync(req.body.password, salt_rounds)
    const user_details = new user({
        user_name: req.body.user_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: user_email,
        password: encrypt_password
    }) 
    if(req.file) {
        user_details.avatar = req.file.path
    }
    user_details.save()
    .then(response => {
        res.json({
            message: response
        })
        console.log('user registration successfull')
    })
    .catch(error => {
        res.json({
            message: error
        })
        console.log("user registration failed")
    })
    
}

// ---------------user login------------------
const user_login = (req, res, next) => {
    const user_name_frontend = req.body.user_name;
    let password_frontend = req.body.password;
    // option to user to enter email or username
    user.findOne({$or: [{email:user_name_frontend}, {user_name:user_name_frontend}]})
    .then(user => {
        if(user) {
            // decrypt password and match
            bcrypt.compare(password_frontend, user.password, function(err, result) {
                if(err) {
                    res.json({
                        message: 'Invalid password', err
                    })
                    console.log('password decrypt error')
                } 
                // if password match generate jwt token
                if(result) {
                    const auth_token = jwt.sign({name: user.user_name}, 'M(vB)<^&0a@', {expiresIn: '1h'});
                    const refresh_token = jwt.sign({name: user.user_name}, 'vn&09 _=BN)^%', {expiresIn: '48h'});
                    
                    res.json({
                        message: 'Login successfull!!',
                        auth_token,
                        refresh_token
                    })
                } else {
                    res.json({
                        message: 'Password entered does not match!!'
                    })
                    console.log('error in user_login password auth')
                }
            })
        } else {
            res.json({
                message: 'Invalid username try sign up'
            })
        }
    })
}

// ---------------refresh token------------------
const user_refresh_token = (req, res, next) => {
    const refresh_token_frontend = req.body.refresh_token
    jwt.verify(refresh_token_frontend, 'vn&09 _=BN)^%', function(err, decode) {
        if(err) {
            res.status(400).json({
                err
            })
        } else {
            let token = jwt.sign({name: decode.name}, 'M(vB)<^&0a@', {expiresIn:'48h'})
            let refreshToken = req.body.refresh_token
            res.status(200).json({
                message: "Token refershed successfully",
                token,
                refreshToken
            })
        }
    })
}

// ---------------user update------------------
const user_update = (req, res, next) => {

}


module.exports = {user_signup, user_login, user_refresh_token, user_update};