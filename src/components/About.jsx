import React from "react";
import { DATA } from "./constants";

export default function About() {
  const { profile } = DATA;
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">{profile.name}</h1>
      <p className="mt-2 text-xl text-slate-700 dark:text-slate-300">{profile.role}</p>
      <p className="mt-4 max-w-sm text-slate-600 dark:text-slate-400">
        {profile.summary}
      </p>
    </>
  );
}
