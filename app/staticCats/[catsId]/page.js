
import { getAllCats } from "./../../actions/getAllCats"
import { getCats } from "./../../actions/getCats"

export default async function StaticCat({ params }) {
  const cat = await getCats(params.catsId)
  return (
    <div>
      <img src={cat.data.attributes.imageLink} alt="альтернативный текст" />
      <h2>{cat.data.attributes.name}</h2>
      <h2>{cat.data.attributes.length}</h2>
      <h2>{cat.data.attributes.minWeight}</h2>
      <h2>{cat.data.attributes.maxWeight}</h2>
      <h2>{cat.data.attributes.minLifeExpectancy}</h2>
      <h2>{cat.data.attributes.maxLifeExpectancy}</h2>
      <h2>{cat.data.attributes.origin}</h2>
    </div>
  )
}

 export async function generateStaticParams() {
    const cats = await getAllCats()
    return cats.data.map(cat => ({
      catsId: `${cat.id}`
    }))
   }