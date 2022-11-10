const { Schema, model, Types } = require('mongoose');
const reaction = require('./reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => {
                const newDate = new Date(date);
                return `${newDate.getMonth()+1}-${newDate.getDate()}-${newDate.getFullYear()}`
            }
        },
        username: {
            type: String,
            required: true,
        },
    }, {
        virtuals: {
            reactionCount: {
                get() {
                    return this.reactions.length;
                }
            }
        },
        toJSON: {
            getters: true,
        },
        id: false,
 });

//get Total Friend Count
thoughtSchema.virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    })

//Initialize our Thoughts model
const Thoughts = model('Thoughts', thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thoughts;