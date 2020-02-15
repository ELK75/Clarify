const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const UserSchema = new Schema({
    googleId: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    hostedSessions: [{
        sessionId: String
    }],
    hosteeSessions: [{
        sessionId: String
    }]
});

module.exports = User = mongoose.model('user', UserSchema);