
import Link from 'next/link';
import { getAllCats } from '../../actions/getAllCats';

export default async function Cats() {
    const cats = await getAllCats();
    return (
        <div>
        <ul>
            {cats.data.map((cat) => (
                <Link  href={`/staticCats/${cat.id}`}>
                <h2>
                    {cat.attributes.name}
                </h2>
                </Link>
            ))
            }
        </ul>
      </div>
    );
}
