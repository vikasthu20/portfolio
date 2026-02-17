import React from "react";
import { DATA } from "../../components/constants";

const Introduction = () => {
  const { introduction } = DATA;
  return (
    <section className="portfolio-summary">

      <p className="text-slate-900 dark:text-slate-400">
        {introduction.paragraph1}
      </p>

      <p className="m-t-10 text-slate-900 dark:text-slate-400">
        {introduction.paragraph2}
      </p>

      <p className="m-t-10 text-slate-900 dark:text-slate-400">
        {introduction.paragraph3}
      </p>

      <p className="m-t-10 text-slate-900 dark:text-slate-400">{introduction.paragraph4}</p>
    </section>
  );
};

export default Introduction;
