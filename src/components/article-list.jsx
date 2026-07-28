import Article from './article'

function ArticleList({ posts }) {
  return (
    <main className="article-list">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  )
}

export default ArticleList