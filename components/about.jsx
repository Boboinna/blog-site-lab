export default function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="Blog logo" class="img" />
      <p>{about}</p>
    </aside>
  )
}