const { Thought, User, Thoughts } = require('../models');
const reactionSchema = require('../models/reaction');

module.exports = {
    getAllThoughts: async (req, res) => {
        try{
            const thoughtData = await Thoughts.find();
            res.status(200).json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getOneThought: async (req, res) => {
        try{
            const thoughtData = await Thoughts.findById(req.params.id);

            !thoughtData ?
            res.status(400).json("Thought not found.") :
            res.status(200).json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    createThought: async (req, res) => {
        try{
            const user = await User.findOne({username: req.body.username});
            const thoughtData = await Thoughts.create(req.body);
            await User.findByIdAndUpdate(user._id, {$push: {thoughts: thoughtData._id}}, {new: true});
            res.status(200).json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateThought: async (req, res) => {
        try{
            const thoughtData = await Thoughts.findByIdAndUpdate(req.params.id, {thoughtText: req.body.thoughtText}, {new: true});
            res.status(200).json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteThought: async (req, res) => {
        try{
            const thoughtData = await Thoughts.findByIdAndDelete(req.params.id);
            res.status(200).json(`${thoughtsData._id} has been deleted.`)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    addReaction: async (req, res) => {
        try{
            const reactionBody = req.body.reactionBody;
            const username = req.body.username;
            if(!reactionBody || !username){
                res.status(400).json("Error");
                return;
            }
            const newReaction = await Thoughts.findByIdAndUpdate(req.params.thoughtId, {$push: {reactions: {reactionBody, username}}}, {new: true});
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteReaction: async (req, res) => {
        try{
            const reactionId = req.body.reactionId;
            if(!reactionId){
                res.status(400).json("Error");
                return;
            }
            const updatedThought = await Thoughts.findByIdAndUpdate(req.params.thoughtId, {$pull: {reactions: {reactionId}}}, {new: true});
            res.status(200).json(updatedThought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

}