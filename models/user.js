const { Schema, model, Types } = require('mongoose');

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
        type: Schema.Types.ObjectId,
        ref: "Thought"
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},  {
    virtuals: {
        friendCount: {
            get() {
                return this.friends.length;
            }
        }
    },    
        toJSON: {
            getters: true,
        },
        id: false,
        versionKey: false
});

userSchema.virtual("friendCount")
    .get(function() {
        return this.friends.length;
    })

//Initialize our User model
const User = model('User', userSchema);

const handleError = (err) => console.error(err);

module.exports = User;