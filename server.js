require('dotenv').config()
const express = require('express')
const {join} = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(require('./routes'))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

app.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'exercise.html'))
})

app.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'stats.html'))
})


require('./config')
  .then( () => app.listen(process.env.PORT || 3000))
  .catch( error => console.error(error))
