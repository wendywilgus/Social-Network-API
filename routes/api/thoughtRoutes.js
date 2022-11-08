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

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtID/reaction')
    .put(addReaction)
    .delete(deleteReaction);

module.exports = router;