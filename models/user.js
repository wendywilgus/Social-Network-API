const { Schema, Types } = require('mongoose');

const userSchema = new Schema( {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: 	
        /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    thoughts: {
        type: Array,
        ref: "Thought"
    },
    friends: {
        type: Array,
        ref: "User"
    }
},  {
    virtuals: {
        friendCount: {
            get() {
                return this.friends.length;
            }
        }
    }
});