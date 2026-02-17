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
          className="text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transform hover:-translate-y-1 transition-all duration-200"
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
}
