const express = require('express');
const router = express.Router();
const user_register = require('../Controllers/user_controller');
const upload = require('../Middleware/profile_upload');
const authenticate = require('../Middleware/user_auth');

// user routes
router.get('/home', function(req, res) {
    authenticate,
    user_register.home
})
router.post('/signup', upload.single('avatar'), user_register.user_signup);
router.post('/login', user_register.user_login);
router.post('/refresh-token', user_register.user_refresh_token);
router.post('/update',  function(req, res) {
    authenticate,
    user_register.user_update
})
router.post('/delete', function(req, res) {
    authenticate,
    user_register.user_delete
})
router.get('/getuser', user_register.user_all)



module.exports = router;