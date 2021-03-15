const express = require('express')

const app = express()
const cors = require('cors')
const Blog = require('./models/blogs')

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('Hi, I\'m the blog\'s Back End! Are you looking for the <a href="/api/blogs">/api/blogs</a> route?')
})

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then((blogs) => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then((result) => {
      response.status(201).json(result)
    })
})

module.exports = app
