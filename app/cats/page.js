import Link from "next/link"
import { getAllCats } from "../actions/getAllCats"

async function getData() {
    const res = await fetch('http://10.10.21.200:1337/api/cats')
   
    return res.json()
  }

export default async function Cats() {
    const cats = await getAllCats()
    return (
      <div>
        <ul>
            {cats.data.map((cat) => (
                <Link  href={`/cats/${cat.id}`}>
                <h2>
                    {cat.attributes.name}
                </h2>
                </Link>
            ))
            }
        </ul>
      </div>
    )
}