const express = require('express')
const showData = require('./showdata')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { showData })
})

app.get('/seasons/:id', (request, response) => {
  const season = showData.seasons.find((season) => season.number === parseInt(request.params.id))

  return response.render('season', { season })
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(4000)
