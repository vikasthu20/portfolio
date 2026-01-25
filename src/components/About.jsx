import React from "react";
import { DATA } from "./constants";

export default function About() {
  const { profile } = DATA;
  return (
    <>
      <h1 className="text-4xl font-bold text-slate">{profile.name}</h1>
      <p className="mt-2 text-xl text-slate">{profile.role}</p>
      <p className="mt-4 max-w-sm text-slate">
        {profile.summary}
      </p>
    </>
  );
}
