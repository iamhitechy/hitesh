import React from "react";
import NavigationMenu from "../components/NavigationMenu";

const workExperiences = [
  {
    id: 1,
    company: "Webyoutechnologies",
    link: "#",
    logoSrc: "",
    badge: "Full-Time",
    role: "Senior React Developer",
    duration: "Jan 2026 - Now",
    location: "Vadodara, Gujarat",
    points: [
      "Spearheaded the development of complex frontend architectures as a Senior React Developer.",
      "Engineered high-performance, visually engaging real estate platforms utilizing GSAP for fluid animations.",
      "Delivered tailored, cross-industry web solutions for sectors including interior design and education.",
    ],
  },
  {
    id: 2,
    company: "Nileshitsolution",
    link: "#",
    logoSrc: "",
    badge: "Internship",
    role: "Frontend Developer Intern",
    duration: "Aug 2025 - Jan 2026",
    location: "Vadodara, Gujarat",
    points: [
      "Developed and maintained multiple live frontend projects, ensuring seamless user experiences.",
      "Implemented intricate web animations and micro-interactions using GSAP to elevate visual storytelling.",
      "Customized Shopify storefronts by mastering Liquid templating, creating highly optimized e-commerce layouts.",
      "Enhanced overall site performance and accessibility across various web applications.",
    ],
  },
  {
    id: 3,
    company: "Veraval Online",
    link: "#",
    logoSrc: "",
    badge: "Internship",
    role: "React Developer Intern",
    duration: "Jun 2025 - Aug 2028",
    location: "Vadodara, Gujarat",
    points: [
      "Gained hands-on experience with modern React patterns, RESTful API integrations, and core software engineering principles.",
      "Contributed to the development of a large-scale product-based application from the ground up.",
      "Designed and built a dynamic product counter dashboard for real-time analytics.",
      "Engineered two comprehensive HR management dashboards to streamline internal operations and improve operational efficiency.",
    ],
  },
];

export default function Works() {
  return (
    <>
      <div className="page">
        <div className="page-col mt-8">
          <h1 className="doto-font text-2xl font-bold">
            <span className="relative">
              <span>Work</span>
            </span>{" "}
            <span className="jetbrains-mono h-fit text-xs font-light tracking-tight text-muted-foreground duration-200 group-hover:text-black dark:group-hover:text-white">
              <span>Here is my work experience!</span>
            </span>
          </h1>
          <style>{`
            @media (max-width: 640px) {
              .works-row {
                flex-direction: column !important;
                gap: 0.5rem !important;
              }
              .works-company {
                white-space: normal !important;
              }
              .works-company > div:first-child {
                display: flex !important;
                flex-wrap: wrap !important;
                align-items: center !important;
                gap: 0.25rem !important;
              }
              .works-company > div:first-child > span {
                margin-left: 0 !important;
              }
              .works-line {
                display: none !important;
              }
              .works-duration {
                padding-left: 2.75rem !important;
                margin-top: 0 !important;
              }
            }
          `}</style>
          <div className="flex flex-col gap-6 mt-6">
            {workExperiences.map((exp) => (
              <div
                key={exp.id}
                className="flex w-full flex-col items-start gap-3"
              >
                <div className="flex w-full flex-row items-start gap-4 works-row">
                  <a target="_blank" href={exp.link} rel="noreferrer">
                    <div className="flex flex-row gap-2 works-company-block">
                      <div className="grid h-9 w-9 shrink-0 select-none place-items-center rounded-md bg-muted/70 overflow-hidden works-logo">
                        {exp.logoSrc ? (
                          <img
                            alt={exp.company}
                            loading="lazy"
                            width="36"
                            height="36"
                            decoding="async"
                            data-nimg="1"
                            className="p-2 object-contain"
                            srcSet={exp.logoSrcSet}
                            src={exp.logoSrc}
                            style={{ color: "transparent" }}
                          />
                        ) : (
                          <span className="text-sm font-bold text-muted-foreground uppercase">
                            {exp.company.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col justify-between whitespace-nowrap works-company">
                        <div className="space-x-2 text-sm font-medium">
                          <span>{exp.company}</span>
                          {exp.badge && (
                            <span className="select-none rounded-full bg-muted/35 px-2 py-0.5 text-[10px] text-muted-foreground/80">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {exp.role}
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="-mr-1.5 mt-2 flex h-px w-full flex-row gap-2 bg-gradient-to-r from-transparent via-transparent to-neutral-800/80 works-line"></div>
                  <div className="flex min-w-24 flex-col justify-between whitespace-nowrap text-xs works-duration">
                    <div className="text-muted-foreground">{exp.duration}</div>
                    <div className="text-muted-foreground/60">
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {exp.points.map((point, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-start gap-2 sm:ml-[30px]"
                    >
                      <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted"></div>
                      <div className="inline-block space-x-1.5 text-[13px] font-light sm:pr-20">
                        <span className="tracking-tight text-muted-foreground">
                          {point}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NavigationMenu />
    </>
  );
}
