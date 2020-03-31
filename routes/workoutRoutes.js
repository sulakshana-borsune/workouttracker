const router = require('express').Router()
const { workout } = require('../models')

//get all workouts
router.get('/workouts', (req, res) => {
  workout.findAll()
  .then( workouts => res.json(workouts))
  .catch( error => {
    console.error(error)
    res.sendStatus(400)
  })
})

//get workout by name
router.get('/workouts/:name', (req, res) => {
  workout.find({'name': req.params.name})
  .then( workout => res.json(workout))
  .catch( error => {
    console.error(error)
    res.sendStatus(400)
  })
})

//post a workout
router.post('/workouts', (req, res) => {
  workout.create(req.body)
  .then( () => res.sendStatus(200))
  .catch( error => {
    console.error(error)
    res.sendStatus(400)
  })
})

//update an exercise
router.put('/workouts/:id', (req, res) => {
  workout.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(error => {
    console.error(error)
    res.sendStatus(400)
  })
})

//delete an exercise
router.delete('/workouts/:id', (req, res) => {
  workout.findByIdAndDelete(req.params.id)
  .then( () => res.sendStatus(200))
  .catch( error => {
    console.error(error)
    res.sendStatus(400)
  })
})

module.exports = router