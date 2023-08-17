import Post from './post'
function ListadoPost({ posts }) {
  return (
    <>
      <h2 className='heading'>Blog</h2>
      <div className='blog'>
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </>
  )
}

export default ListadoPost
