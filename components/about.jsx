export default function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" class="img" />
      <p>{about}</p>
    </aside>
  )
}