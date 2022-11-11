const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

    // /api/users/:id
router
    .route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends
router
    .route('/:userId/friends/:friendId')
    .put(addFriend)

// /api/users/:userId/friends/:friendId
router  
    .route('/:userId/friends/:friendId')    
    .delete(removeFriend);

module.exports = router;