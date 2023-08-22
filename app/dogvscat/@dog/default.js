import Link from 'next/link';
import { getAllCats } from '../../actions/getAllCats';

export default async function DogsDefault() {
    const cats = await getAllCats();
    return null
}