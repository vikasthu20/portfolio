import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/vikasthu20",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vikasthu",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vignesh_kasthurisamy/",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://x.com/kvigneshece08",
    icon: FaTwitter,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-200"
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
}
