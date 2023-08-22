import Link from "next/link";

export default async function DogsVsCats() {
    return (
      <div>
        <div>
        <Link href={`/dogvscat/noDogs`}>Dogs</Link>
        <Link href={`/dogvscat/login`}>login</Link>
        </div>
        <div>
        Cats vs Dogs
        </div>
      </div>
    )
}