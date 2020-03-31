const {Schema, model} = require('mongoose')

module.exports = model('workout', new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises:[{
    type: {type: String},
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
})
)
