import Link from "next/link"
import { getAllDogs } from "../actions/getAllDogs"

export default async function Dogs() {
    const dogs = await getAllDogs()
    return (
      <div>
        <ul>
            {dogs?.data.map((dog) => (
                <Link  href={`/dogs/${dog.id}`}>
                <h2>
                    {dog.attributes.name}
                </h2>
                </Link>
            ))
            }
        </ul>
      </div>
    )
}