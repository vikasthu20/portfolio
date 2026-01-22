import React from "react";
import { DATA } from "./constants";

const Footer = () => {
  const { footer } = DATA;
  return (
    <footer className="w-full border-t border-white/10 py-6 text-center text-sm text-slate-400">
      {footer}
    </footer>
  );
};

export default Footer;
