import Link from 'next/link';
import { getAllCats } from '../../actions/getAllCats';

export default async function CatsDefault() {
    const cats = await getAllCats();
    return (
        <div>
        No Cats!
      </div>
    );
}