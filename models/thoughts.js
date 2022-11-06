const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: {
        type: Array,
        ref: "Reaction"
    }
}, {
    virtuals: {
        reactionCount: {
            return this.reactions.length;
        }
    }
})