const mongoose = require('mongoose');
const schema = mongoose.Schema

// user schema
const user_schema = new schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
        min: 3
    },
    first_name: {
        type: String,
        required: true,
        min: 3
    },
    last_name: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: 'email required',
        unique: true
    },
    password: {
        type: String,
        required: true,
        min:8
    },
    contact_number: {
        type: Number,
        min: 10
    },
    project: {
        type: String,
    },
    coding_profile: {
        type: String
    },
    skills: {
        type: String
    },
    bio: {
        type: String
    },
    avatar: {
        type: String
    }, 
    connections: [
        {
            email: String,
            user_name: String,
            first_name: String,
            last_name: String,
            bio: String,
            profile_image: String,
        }
    ], 
    pending: [{
        email: String,
        user_name: String,
        first_name: String,
        last_name: String
    }],
    posts: [],
}, {timestamps: true})

// static functions to check email and usernam already exists
user_schema.statics.is_email_in_use = async function(email) {
    try {
        const user_email = await this.findOne({email}) 
        if(user_email) 
            return false;
        return true;
    } catch(error) {
        console.log("error inside is_email_in_use method", error)
        return false;
    } 
    
}

user_schema.statics.is_username_in_use = async function(user_name) {
    try {
        const userName = await this.findOne({user_name}) 
        if(userName) 
            return false;
        return true;
    } catch(error) {
        console.log("error inside is_username_in_use method", error)
        return false;
    } 
    
}

const user = mongoose.model('User', user_schema);
module.exports = user;