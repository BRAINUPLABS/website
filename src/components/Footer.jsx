import React from 'react';

const FOOTER_COLUMNS = [
  [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "about.html" },
        { label: "Blog", href: "#" },
        { label: "Partners and Distributors", href: "#" },
        { label: "Terms and Conditions", href: "terms-and-conditions" },
        { label: "Privacy Policy", href: "privacy-policy" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Codeavour - AI Competition", href: "#" },
        { label: "Community Projects", href: "#" },
        { label: "Projects by STEMpedia", href: "#" },
        { label: "Example Projects", href: "#" },
        { label: "Teacher Training Program", href: "#" },
      ],
    },
    {
      title: "Impact Programs",
      links: [
        { label: "CSR & Government Impact Program", href: "#" },
      ],
    },
  ],
  [
    {
      title: "School Programs",
      links: [
        { label: "AI & Robotics Lab", href: "#" },
        { label: "Robotics and AI Lab for ICSE Schools", href: "#" },
        { label: "Atal Tinkering Labs", href: "#" },
        { label: "STEM Innovation Lab", href: "#" },
        { label: "Robotics Education Program for School", href: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Quarky - AI & Robotics Kit", href: "#" },
        { label: "Quarky Addon Kits", href: "#" },
        { label: "Quarky Intellio", href: "#" },
        { label: "Wizbot", href: "#" },
        { label: "evive - STEM Kit", href: "#" },
        { label: "PictoBlox Software", href: "#" },
        { label: "Dabble App", href: "#" },
      ],
    },
    {
      title: "Product Documentation",
      links: [
        { label: "Quarky Kits", href: "#" },
        { label: "Quarky Intellio", href: "#" },
        { label: "Wizbot", href: "#" },
        { label: "evive Kits", href: "#" },
        { label: "PictoBlox Software", href: "#" },
        { label: "PictoBlox Extensions & Libraries", href: "#" },
        { label: "Dabble App", href: "#" },
        { label: "Arduino with PictoBlox", href: "#" },
      ],
    },
  ],
  [
    {
      title: "Curriculum and Books",
      links: [
        { label: "AI and Robotics Skilling Books", href: "#" },
        { label: "Skillful Minds Books - CBSE (1 to 8)", href: "#" },
        { label: "Digital Wizards Books - CBSE (1 to 8)", href: "#" },
        { label: "Artificial Intelligence 417 Books - CBSE (9 to 10)", href: "#" },
        { label: "Tech Tinkerer Books - ICSE (1 to 8)", href: "#" },
        { label: "Robotics and AI Books - ICSE (9 to 10)", href: "#" },
      ],
    },
    {
      title: "Learning Resources",
      links: [
        { label: "Education Center", href: "#" },
        { label: "Courses & Teacher Resources", href: "#" },
      ],
    },
    {
      title: "Robotics and AI Books",
      links: [
        { label: "Class 1 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 2 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 3 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 4 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 5 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 6 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 7 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 8 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 9 Books for CBSE, ICSE, IB", href: "#" },
        { label: "Class 10 Books for CBSE, ICSE, IB", href: "#" },
      ],
    },
  ],
];

const CONTACT_LINKS = [
  { label: "Contact Us", href: "#" },
  { label: "Book a Demo", href: "#" },
  { label: "Request a Quote", href: "#" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/share/18WYjFm5sJ/", label: "Facebook", icon: "fa-brands fa-facebook-f" },
  { href: "https://x.com/brainuplabs", label: "Twitter", icon: "fa-brands fa-x-twitter" },
  { href: "#", label: "YouTube", icon: "fa-brands fa-youtube" },
  { href: "https://www.instagram.com/brainup_labs?igsh=a2tmaTE3c2JxbXYw", label: "Instagram", icon: "fa-brands fa-instagram" },
  { href: "https://www.linkedin.com/company/brainup-labs/", label: "LinkedIn", icon: "fa-brands fa-linkedin-in" },
];

const FooterSection = ({ title, links }) => (
  <>
    <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-gray-400 hover:text-[#FF822E] text-sm transition-colors">{link.label}</a>
        </li>
      ))}
    </ul>
  </>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Brand & Social Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Brainup Labs</h2>
            <p className="text-gray-400 text-sm">Empowering the next generation with AI & Robotics.</p>
          </div>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, idx) => (
              <a key={idx} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#FF822E] hover:text-white transition-all">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {FOOTER_COLUMNS.map((column, colIndex) => (
            <div className="flex flex-col gap-8" key={colIndex}>
              {column.map((section, secIndex) => (
                <div key={secIndex}>
                  <FooterSection title={section.title} links={section.links} />
                </div>
              ))}
            </div>
          ))}
          {/* Contact Column */}
          <div className="flex flex-col gap-8">
            <div>
              <FooterSection title="Get in Touch" links={CONTACT_LINKS} />
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Brainup Labs. All rights reserved.</p>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
            <span className="text-xs font-bold text-gray-400 tracking-wider">FUNDED WITH</span>
            <span className="text-sm font-semibold text-white">MeityStartup & NSUT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
