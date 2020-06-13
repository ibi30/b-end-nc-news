const apiRouter = require('express').Router()
const topicRouter = require('./topicRouter')
const userRouter = require('./userRouter')
const articleRouter = require('./articleRouter')
const commentRouter = require('./commentRouter')
const {getApi} = require('../controllers/endpoints-controller')
const {methodNotAllowed} = require('../errors')

apiRouter.route('/')
.get(getApi)
.all(methodNotAllowed)

apiRouter.use('/topics', topicRouter)

apiRouter.use('/users', userRouter )

apiRouter.use('/articles', articleRouter)

apiRouter.use('/comments', commentRouter)

module.exports = apiRouter