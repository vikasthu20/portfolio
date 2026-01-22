import { DATA } from "./constants";

export default function SocialLinks() {
  const { socials } = DATA;
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
