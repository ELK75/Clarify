const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const SessionSchema = new Schema({
    sessionName:{
        type: String,
        default: 'unnamed Session'
    },
    date: {
        type: Date,
        default: Date.now
    },
    posts: [{
        post: {
        postId: String,
        body: String,
        likes: Number,
        comment: String,
        poster: {
            googleId: String,
            userName: String
        }
    }}]
});

module.exports = Session = mongoose.model('session', SessionSchema);