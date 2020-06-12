const {updateCommentById, removeCommentById} = require('../models/comment-models')

exports.patchCommentById = (req, res, next) => {
    const {comment_id} = req.params
    const {inc_votes} = req.body
    updateCommentById(comment_id, inc_votes)
    .then(comment => res.status(201).send({comment}))
    .catch(next)
}

exports.deleteCommentById = (req, res, next) => {
    const {comment_id} = req.params
    removeCommentById(comment_id)
    .then(() => res.sendStatus(204))
    .catch(next)
}