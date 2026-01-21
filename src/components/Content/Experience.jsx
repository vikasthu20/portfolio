import { useState } from "react";

const experiences = [
  {
    id: 1,
    period: "2022 — Present",
    title: "Senior Systems Analyst",
    company: "IBM",
    description:
      "Led development of Sony PlayStation Direct, an AEM-based e-commerce platform serving millions of users globally,managing PlayStation games and online services. Collaborate closely with developers, designers, and product managers to implement and advocate best practices improving the application performance.",
    skills: ["JavaScript", "TypeScript", "Node.js", "React", "AEM", "GraphQL"],
  },
  {
    id: 2,
    period: "2020 — 2022",
    title: "Senior Associate",
    company: "Cognizant",
    description:
      "Senior engineer experienced in frontend modernization, cloud deployment, and team leadership. Successfully reduced technical complexity, improved delivery velocity, scaled engineering teams, and maintained high client satisfaction through Agile practices.",
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "React", "Redux", "AWS"],
  },
  {
    id: 3,
    period: "2018 — 2020",
    title: "Lead Engineer",
    company: "HCL Technologies",
    description:
      "Experienced frontend engineer specializing in ReactJS, enterprise dashboards, and secure applications. Proven track record of improving code quality, reducing production issues, and defining coding standards in high-compliance environments.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "React",
      "Redux",
      "Node.js",
      "mongoDB",
    ],
  },
  {
    id: 4,
    period: "2015 — 2018",
    title: "Software Engineer",
    company: "C1X Adtech",
    description:
      "Full-stack developer skilled in Angular, AdTech platforms, data visualization, CI/CD automation, AWS, and database integration, with strong experience delivering scalable, analytics-driven web applications.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "AngularJS",
      "D3.js",
      "Angular",
      "Node.js",
      "MySQL",
    ],
  },
  {
    id: 5,
    period: "2014 — 2015",
    title: "Process Analyst - Conversion",
    company: "Egiants",
    description:
      "Converted 100+ Word and InDesign documents into eBook and Kindle formats, conducting cross-device QA testing to ensure consistent quality and compatibility.",
    skills: [
      "JavaScript",
      "HTML/CSS",
      "E-pub",
      "Kindle",
    ],
  },
];

const Experience = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      <div className="space-y-10">
        {experiences.map((exp) => {
          const isActive = activeId === exp.id;

          return (
            <div
              key={exp.id}
              onMouseEnter={() => setActiveId(exp.id)}
              className={`grid grid-cols-12 gap-10 rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-white/5 shadow-lg ring-1 ring-white/10"
                  : "opacity-40 hover:opacity-60"
              }`}
            >
              {/* Left – Years */}
              <div className="col-span-12 md:col-span-3">
                <span
                  className={`text-sm tracking-widest uppercase transition-colors ${
                    isActive ? "text-cyan-400" : "text-slate-500"
                  }`}
                >
                  {exp.period}
                </span>
              </div>

              {/* Right – Content */}
              <div className="col-span-12 md:col-span-9">
                <h3 className="text-lg font-semibold text-slate-100">
                  {exp.title} ·{" "}
                  <span className="text-cyan-400">{exp.company}</span>
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cyan-400/10 px-4 py-1 text-xs font-medium text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
