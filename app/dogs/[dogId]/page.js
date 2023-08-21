
import { getAllDogs } from "../../actions/getAllDogs"
import { getDogs } from "../../actions/getDog"

export default async function StaticDogs({ params }) {
  const dog = await getDogs(params.dogId)
  return (
    <div>
      <img src={dog.data.attributes.imageLink} alt="альтернативный текст" />
      <h2>{dog.data.attributes.name}</h2>
      <h2>{dog.data.attributes.length}</h2>
      <h2>{dog.data.attributes.minWeight}</h2>
      <h2>{dog.data.attributes.maxWeight}</h2>
      <h2>{dog.data.attributes.minLifeExpectancy}</h2>
      <h2>{dog.data.attributes.maxLifeExpectancy}</h2>
      <h2>{dog.data.attributes.origin}</h2>
    </div>
  )
}

export async function generateStaticParams() {
    const dogs = await getAllDogs()
    return dogs.data.map(dog => ({
      dogId: `${dog.id}`
    }))
   }