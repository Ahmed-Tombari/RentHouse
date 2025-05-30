import FooterLogo from "./ui/footerUi/FooterLogo";
import FooterNav from "./ui/footerUi/FooterNav";
import FooterSocials from "./ui/footerUi/FooterSocials";
import FooterSubscribe from "./ui/footerUi/FooterSubscribe";


export default function Footer() {
  const navLinks = [
    {
      title: 'About Us',
      links: [
        { title: 'Company History', href: '#' },
        { title: 'Meet the Team', href: '#' },
        { title: 'Employee Handbook', href: '#' },
        { title: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { title: 'Web Development', href: '#' },
        { title: 'Web Design', href: '#' },
        { title: 'Marketing', href: '#' },
        { title: 'Google Ads', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Online Guides', href: '#' },
        { title: 'Conference Notes', href: '#' },
        { title: 'Forum', href: '#' },
        { title: 'Downloads', href: '#' },
        { title: 'Upcoming Events', href: '#' },
      ],
    },
    {
      title: 'Helpful Links',
      links: [
        { title: 'FAQs', href: '#' },
        { title: 'Support', href: '#' },
        { title: 'Live Chat', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white w-full flex px-4 md:px-16 lg::px-32">
      <div className="mx-auto w-full">
        <div className="lg:flex lg:items-center lg:justify-between">
          <FooterLogo />

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {navLinks.map((section, idx) => (
              <FooterNav key={idx} title={section.title} links={section.links} />
            ))}

            <FooterSubscribe />
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between pb-4">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            Copyright  "Renthouse &copy; 2025. All rights reserved.
          </p>
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}