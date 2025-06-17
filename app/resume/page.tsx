import PageWrapper from "app/components/page-wrapper";
import { Be_Vietnam_Pro, Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const EXPERIENCE = [
  {
    company: "d.labs",
    position: "Web Developer",
    type: "Full-time",
    period: "Jul 2022 - Present",
    duration: "2 yrs 9 mos",
    location: "Ljubljana, Slovenia",
    responsibilities: [
      "Was part of a process where a company needed consultancy regarding their legacy FE codebase. The goal was to introduce state machines to their FE to better handle the complex flows their application had to support. (XState, Tailwind, Redux)",
      "Part of a team that works with a publishing company, handling rewrites and updates to it's FE infrastructure. (Next.js, React/TS, Tailwind, GraphQL, Arc.xp)",
      "Part of the fintech specific team creating a modern app for B2B currency exchanges, payments and transaction overview (NX, React, Nest.js, Postgres)",
    ],
    skills: ["Too many to list, ask me if you're curious"],
  },
  {
    company: "Influee",
    position: "Frontend Developer",
    type: "Full-time",
    period: "Jan 2022 - May 2022",
    duration: "5 mos",
    location: "Ljubljana, Slovenia",
    responsibilities: [
      "First time working for a smaller company of around 4 developers.",
      "Again worked on multiple products, an admin dashboard which was used by companies to connect with influencers, review the content those influencers were producing, using a video editor to edit that content etc. Worked on their mobile app as well which used React Native, a first for me and a great learning experience.",
      "Technologies used were React, Apollo GraphQL, React Native, Next.js",
    ],
    skills: ["NextJS", "React Native", "Apollo GraphQL"],
  },
  {
    company: "INEOR",
    position: "Frontend Developer",
    type: "Full-time",
    period: "Mar 2020 - Jan 2022",
    duration: "1 yr 11 mos",
    location: "Ljubljana, Slovenia",
    responsibilities: [
      "Worked in multiple teams and 3 projects for the online gaming industry.",
      "Was part of one team that designed the user flows, established the foundations of the application, wrote tests and documentation from idea to client hand-off. Technologies used were React/TS with Material UI and GraphQL for the data layer.",
      "Was also part of a team responsible for upgrading an old Angular 4 app to the latest version of Angular, stabilizing the product and implementing new features. Technologies used were Angular, RxJS, Sass and GraphQL.",
    ],
    skills: ["Angular", "React"],
  },
  {
    company: "CDE nove tehnologije d.o.o.",
    position: "Software Engineer",
    type: "Full-time",
    period: "Sep 2018 - Mar 2020",
    duration: "1 yr 7 mos",
    location: "Ljubljana, Slovenia",
    responsibilities: [
      "First developer job. Working on a React application which was used as an admin dashboard for call centers in insurance companies and banks like NLB, NKBM, Sava etc.",
    ],
    skills: ["React"],
  },
];

export default function Page() {
  return (
    <PageWrapper title="Resume">
      <div className="space-y-12">
        <section>
          <div className="relative space-y-12">
            {EXPERIENCE.map((job, index) => (
              <div key={`${job.company}-${job.period}`} className="relative">
                <div className="absolute left-[-24px] top-[5px] h-full">
                  <div className="w-6 h-6 rounded-full bg-text-terniary"></div>
                  {index !== EXPERIENCE.length - 1 && (
                    <div className="absolute top-4 left-[11px] w-[2px] h-[calc(100%+48px)] bg-text-terniary"></div>
                  )}
                </div>
                <div className="ml-8 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3
                        className={`text-2xl text-heading mb-4 ${beVietnamPro.className}`}
                      >
                        {job.position}
                      </h3>
                      <p className="flex items-center space-x-2 text-text-terniary">
                        <span>{job.company}</span>
                        <span>·</span>
                        <span>{job.type}</span>
                      </p>
                    </div>
                    <div
                      className={`text-right text-subheading ${robotoMono.className}`}
                    >
                      <div>{job.period}</div>
                      <div>{job.location}</div>
                    </div>
                  </div>
                  <ul className="list-disc pl-4 space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="text-sm text-black">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  {job.skills && (
                    <div
                      className={`flex flex-wrap gap-2 ${robotoMono.className}`}
                    >
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-full border border-black text-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
