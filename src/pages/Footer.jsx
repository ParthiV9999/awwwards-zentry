import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://medium.com", icon: <FaMedium /> },
  ];

  return (
    <footer id="footer" className="w-full bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto uppercase">
        <div className="my-8 flex items-center justify-center sm:justify-start gap-6">
          {socialLinks.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-3xl md:text-4xl transition-colors duration-500 ease-in-out hover:text-blue-50"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-sm flex items-center flex-col justify-center sm:flex-row sm:justify-between flex-wrap gap-4">
          <span>©Parthiv 2024. All rights reserved</span>
          <span>
            <a
              href="#privacy-policy"
              className="text-sm font-light hover:underline transition-colors duration-500 ease-in-out hover:text-blue-50"
            >
              Privacy Policy
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
