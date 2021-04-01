// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => 1

const totalLikes = (blogs) => {
  const initialValue = 0
  const likes = blogs.map((blog) => blog.likes)
  const reducer = (accumulator, currentValue) => accumulator + currentValue

  return likes.reduce(reducer, initialValue)
}

const favoriteBlog = (blogs) => {
  const likes = blogs.map((blog) => blog.likes)
  const mostLikes = Math.max(...likes)

  return blogs.filter((blog) => blog.likes === mostLikes)[0]
}

// returns {name, number of blogs} for the top author
const mostBlogs = (blogs) => {
  const authors = []
  blogs.forEach((blog) => authors.push(blog.author))

  /* eslint-disable no-param-reassign */
  const getTotals = (allAuthors, author) => {
    if (allAuthors[author]) {
      allAuthors[author] += 1
    } else {
      allAuthors[author] = 1
    }
    return allAuthors
  }
  /* eslint-enable no-param-reassign */

  const authorTotals = authors.reduce(getTotals, {})

  const highestValue = (a, b) => (authorTotals[a] > authorTotals[b] ? a : b)

  const popularAuthor = Object.keys(authorTotals).reduce(highestValue)

  return ({
    author: popularAuthor,
    blogs: authorTotals[popularAuthor],
  })
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs,
}
