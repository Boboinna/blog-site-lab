export default function About({ image = "/default-logo.png", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" className="img" />
      <p>{about}</p>
    </aside>
  )
}