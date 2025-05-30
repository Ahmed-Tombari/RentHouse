export default function NavLinks({ mobile = false }) {
  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Annonces', href: '/about' },
    { name: 'Publier', href: '/careers' },
    { name: 'Inscription', href: '/history' },
  ];

  return (
    <ul className={`${mobile ? 'flex flex-col gap-4' : 'flex items-center gap-6'} text-sm`}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className={`${
              mobile ? 'text-lg text-gray-700' : 'text-gray-500 hover:text-gray-700'
            } transition`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}