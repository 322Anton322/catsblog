
import Link from 'next/link';
import { getAllCats } from '../../actions/getAllCats';

export default async function Cats() {
    const cats = await getAllCats();
    return (
        <div>
        <ul>
        <Link  href={`/dogvscat/map`}>Link</Link>
        <Link  href={`/dogvscat/login`}>Login</Link>
            {cats.data.map((cat) => (
                <Link  href={`/dogvscats/map`}>
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
