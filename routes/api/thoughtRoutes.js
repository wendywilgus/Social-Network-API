const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);


// /api/thoughts/:thoughtId
router
    .route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

    // /api/thoughts/:thoughtId/reaction
router
    .route('/:thoughtId/reaction')
    .put(addReaction)

// /api/thoughts/:thoughtId/reaction/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;