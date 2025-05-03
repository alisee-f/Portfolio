import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around text-white">
        <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
        <li><Link href="/projets" className="hover:text-blue-400">Projets</Link></li>
        <li><Link href="/stage" className="hover:text-blue-400">Stage</Link></li>
        <li><Link href="/veilleTechnologique" className="hover:text-blue-400">Veille technologique</Link></li>
        <li><Link href="/parcoursCertification" className="hover:text-blue-400">Parcours certification</Link></li>
        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
}