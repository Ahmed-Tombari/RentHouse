export default function FooterNav({ title, links }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-gray-900">{title}</p>
      <ul className="mt-8 space-y-4 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a className="text-gray-700 transition hover:text-gray-700/75" href={link.href}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}