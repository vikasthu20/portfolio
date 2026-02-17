import React from "react";
import { DATA } from "./constants";

const Footer = () => {
  const { footer } = DATA;
  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/10 py-6 text-center text-sm text-black-600 dark:text-slate-400">
      {footer}
    </footer>
  );
};

export default Footer;
