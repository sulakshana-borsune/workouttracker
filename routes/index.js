const router = require('express').Router()

router.use('/api', require('./WorkoutRoutes.js'))

module.exports = router