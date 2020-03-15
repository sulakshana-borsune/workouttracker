const express = require('express')
require('dotenv').config()
const {join} = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('./routes')

app.use(require('./routes'))

app.get('/', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'index.html'))
})

//route for exercise.html
app.get('/exercise', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'exercise.html'))
})

//route for stats.html
app.get('/stats', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'stats.html'))
})

require('./config')
  .then( () => app.listen(process.env.PORT || 3000))
  .catch( error => console.error(error))



