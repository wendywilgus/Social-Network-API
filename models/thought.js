const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./reaction');

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
        reaction: [reactionSchema]
            
        
    }, {
        virtuals: {
            reactionCount: {
                get() {
                    return this.reaction.length;
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
        return this.reaction.length;
    })

//Initialize our Thoughts model
const thought = model('thought', thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = thought;