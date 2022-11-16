const { ObjectId } = require('mongoose').Types;
const { user, thought } = require('../models');

module.exports = {
    getAllUsers: async (req, res) => {
        try{
            const userData = await user.find();
            res.status(200).json(userData);
            console.log(res);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    getOneUser: async (req, res) => {
        try{
            const userData = await user.findById(req.params.id);
            !userData ?
                res.status(400).json("User not found") :
                res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },


    createUser: async (req, res) => {
        try{
            const userData = await user.create(req.body);
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },


    updateUser: async (req, res) => {
        try{
            const userData = await user.findByIdAndUpdate( req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteUser: async (req, res) => {
        try{
            const deletedUser = await user.findByIdAndDelete(req.params.id);
            await thought.deleteMany( {username: deleteUser.username} );
            res.status(200).json(`${deleted.user} has been removed`);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    addFriend: async (req, res) => {
        try{
            const newFriend = await user.findByIdAndUpdate(req.params.userId, {$push: {friend: req.params.friendId}}, {new: true});
            res.status(200).json(newFriend);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    removeFriend: async (req, res) => {
        try{ 
            const deletedFriend = await user.findByIdAndUpdate(req.params.userId, {$pull: {friend: req.params.friendId}}, {new: true});
            res.status(200).json(`Removed ${req.params.friendId} from user friends.`)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}