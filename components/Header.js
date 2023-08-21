import Link from 'next/link';

export const Header = () => {
    return (
        <header className=" top-0 px-2 border-b flex items-center justify-between">
            <nav className="flex items-center">
                <Link
                    className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800"
                    href="/cats"
                >
                   <h2>Cats</h2> 
                </Link>
                <Link
                    className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800"
                    href="/dogs"
                >
                    <h2>Dogs</h2> 
                </Link>
            </nav>
        </header>
    );
};
