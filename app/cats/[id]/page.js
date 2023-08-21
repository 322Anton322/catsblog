import { getCats } from "./../../actions/getCats"

export default async function StaticCat({ params }) {
  const cats = await getCats(params.id)
  return (
    <div>
      <img src={cats.data.attributes.imageLink} alt="альтернативный текст" />
      <h2>{cats.data.attributes.name}</h2>
      <h2>{cats.data.attributes.length}</h2>
      <h2>{cats.data.attributes.minWeight}</h2>
      <h2>{cats.data.attributes.maxWeight}</h2>
      <h2>{cats.data.attributes.minLifeExpectancy}</h2>
      <h2>{cats.data.attributes.maxLifeExpectancy}</h2>
      <h2>{cats.data.attributes.origin}</h2>
    </div>
  )
}