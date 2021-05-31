/* eslint-disable no-param-reassign */
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

  const getTotals = (allAuthors, author) => {
    if (allAuthors[author]) {
      allAuthors[author] += 1
    } else {
      allAuthors[author] = 1
    }
    return allAuthors
  }

  const authorTotals = authors.reduce(getTotals, {})

  const highestValue = (a, b) => (authorTotals[a] > authorTotals[b] ? a : b)

  const popularAuthor = Object.keys(authorTotals).reduce(highestValue)

  return ({
    author: popularAuthor,
    blogs: authorTotals[popularAuthor],
  })
}

const mostLikes = (blogs) => {
  // Return object with author names as properties and
  // their total # of likes as the value
  const getTotalLikes = (likesByAuthor, blog) => {
    if (likesByAuthor[blog.author]) {
      likesByAuthor[blog.author] += blog.likes
    } else {
      likesByAuthor[blog.author] = blog.likes
    }
    return likesByAuthor
  }

  // Returns array containing author with most likes
  // ['author name', numOfLikes]
  const findMost = (authors) => {
    const max = Math.max(...Object.values(authors))
    return Object.entries(authors).filter((a) => a[1] === max)[0]
  }

  const totaledLikes = blogs.reduce(getTotalLikes, {})
  const match = findMost(totaledLikes)

  return { author: match[0], likes: match[1] }
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes,
}
