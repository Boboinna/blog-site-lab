export default function Article({ title, date = "Unknown date", preview }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}