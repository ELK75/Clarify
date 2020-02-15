const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const UserSchema = new Schema({
    userName:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    profilePhoto: {
        uri: String
    },
    hostedSessions: [{
        sessionId: String
    }],
    hosteeSessions: [{
        sessionId: String
    }]
});

module.exports = User = mongoose.model('user', UserSchema);