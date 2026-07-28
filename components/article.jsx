export default function Article({ title, date, preview }) {
  return (
    <article class="article">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}