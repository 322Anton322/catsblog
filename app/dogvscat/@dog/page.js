import Link from "next/link";
import { getAllDogs } from "../../actions/getAllDogs"

export default async function Dogs() {
    const dogs = await getAllDogs();
    return (
        <div>
        <ul>
            {dogs?.data.map((dog) => (
                
                <h2>
                    {dog.attributes.name}
                </h2>
            ))
            }
        </ul>
        <Link  href={`/dogvscat/noDogs`}>Link</Link>
      </div>
    );
}
