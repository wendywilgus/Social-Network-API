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
    thought: {
        type: Schema.Types.ObjectId,
        ref: "thought"
    },
    friend: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }]
},  {
    virtuals: {
        friendCount: {
            get() {
                return this.friend.length;
            }
        }
    },    
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    
});

// userSchema.virtual("friendCount")
//     .get(function() {
//         return this.friends.length;
//     })

//Initialize our User model
const user = model('user', userSchema);

const handleError = (err) => console.error(err);

module.exports = user;