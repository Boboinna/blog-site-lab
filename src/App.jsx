// App.jsx
import './App.css'
import Header from './components/header'
import About from './components/about'
import ArticleList from './components/article-list'

function App() {
  const BlogName = "My Blog"
  const posts = [
    {
      id: 1,
      title: "React + vite",
      date: "01-02-2026",
      preview: "Yesterday I built a blog using React and Vite. It was a fun experience and I learned a lot!"
    },
    {
      id: 2,
      title: "React Testing",
      date: "02-02-2026",
      preview: "Today, I am going to learn about React testing library and how to write tests for my components. I am excited to learn more about testing!"
    },
    {
      id: 3,
      title: "React Router",
      date: "03-02-2026",
      preview: "On this day, I will be learning about React Router and how to create a multi-page application using React. I am looking forward to learning more about routing in React!"
    },
  ]
  const image = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXpvZGlhYy1sZW8taWNvbiBsdWNpZGUtem9kaWFjLWxlbyI+PHBhdGggZD0iTTEwIDE2YzAtNC0zLTQuNS0zLThhNSA1IDAgMCAxIDEwIDBjMCAzLjQ2Ni0zIDYuMTk2LTMgMTBhMyAzIDAgMCAwIDYgMCIvPjxjaXJjbGUgY3g9IjciIGN5PSIxNiIgcj0iMyIvPjwvc3ZnPg=="
  const about = "This blog is about me, an aspiring software developer and cyber security analyst. I will be posting about my journey, my projects and my thoughts on the tech industry. I hope you enjoy reading!"

  return (
    <>
      {/* Navbar/Header */}
      <Header name={BlogName} />

      <div className="main">
        {/* About */}
        <About image={image} about={about} />

        {/* Article list with articles inside */}
        <ArticleList posts={posts} />
      </div>
    </>
  )
}

export default App