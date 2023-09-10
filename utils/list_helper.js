const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0;
  }
  const listOfLikes = blogs.map(blog => blog.likes)
  const reducer = (sum, item) => {
    return sum + item
  }
  return listOfLikes.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return 0;
  }
  const formattedBlogs = blogs.map(function(blog) {
    return {title: blog.title, author: blog.author, likes: blog.likes} 
  })
  console.log(formattedBlogs)

  if(formattedBlogs.length === 1) {
    return formattedBlogs[0]
  }
  
  const reducer = (maxSoFar, current) => {
    return maxSoFar.likes >= current.likes
      ? maxSoFar
      : current
  }

  return formattedBlogs.reduce(reducer)
}
  
module.exports = {
  dummy, totalLikes, favoriteBlog
}