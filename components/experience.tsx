"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "AVP",
    company: "Knight Fintech",
    period: "June 2025 - Present",
    description: [
      "Leading due diligence, technology integration, and platform consolidation post-acquisition",
      "Driving architectural alignment between Knight Fintech and Niro systems by consolidating microservices, standardizing APIs, and unifying infrastructure",
    ],
    tags: ["Leadership", "Architecture", "Integration"],
  },
  {
    title: "SDE-2 / SDE-3",
    company: "Niro Money (QFI Technologies)",
    period: "November 2021 - June 2025",
    description: [
      "Designed and led a team of 4 developers to build a Personal Loans platform, including a Next.js web app, React Native mobile app, and GraphQL microservices",
      "Scaled web app journey from 1 partner and 1 lender to 7 lenders and 16 partners, achieving a ₹1000 crore loan book in 2 years",
      "Developed configuration-driven theme structure, reducing partner integration time from one week to one day",
      "Achieved 19% improvement in LCP and reduced bundle size by 450KB through optimization techniques",
      "Developed comprehensive credit line product front-end within one month, activating ₹5 crore in credit lines",
    ],
    tags: ["Next.js", "React Native", "GraphQL", "TypeScript", "Performance"],
  },
  {
    title: "Senior Software Engineer (Contractor)",
    company: "Apple (via Techsophy)",
    period: "January 2021 - November 2021",
    description: [
      "Worked on back office apps for Apple Maps Hyderabad",
      "Optimized API calls caching using React Query",
    ],
    tags: ["React", "React Query", "Optimization"],
  },
  {
    title: "Contract Developer",
    company: "Fancode",
    period: "October 2020 - December 2020",
    description: [
      "Improved page speed by implementing image lazy loading and segment architecture",
      "SEO improvements using React Helmet",
    ],
    tags: ["React", "Performance", "SEO"],
  },
  {
    title: "Software Engineer",
    company: "FanDuniya",
    period: "April 2020 - September 2020",
    description: [
      "Implemented Firebase Notifications, Remote Config, and Dynamic Linking",
      "Integrated Sentry and Indicative for user behavior tracking",
      "Developed ML models with over 68% accuracy using Pandas, KMeans Clustering, and Regression",
    ],
    tags: ["React Native", "Firebase", "ML", "Python"],
  },
  {
    title: "Associate Software Engineer / Software Engineer",
    company: "Techsophy",
    period: "December 2016 - March 2020",
    description: [
      "Developed and delivered 4 React Native apps from scratch",
      "Implemented React Navigation, Redux, and custom navigation solutions",
      "Integrated Google Maps, In-App Purchases, DRM, Analytics, and Crash Reporting",
      "Acquired comprehensive experience with Xcode certificates and provisioning profiles",
    ],
    tags: ["React Native", "Redux", "iOS", "Android"],
  },
];

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExp = experiences[selectedIndex];

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          id="experience-heading"
          className="text-3xl sm:text-4xl font-bold mb-12 text-balance text-center"
        >
          My journey as a developer
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Tabs - horizontal on mobile, vertical on desktop */}
          <div
            role="tablist"
            aria-label="Experience timeline"
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible lg:min-w-[280px] pb-2 lg:pb-0 scrollbar-hide"
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={selectedIndex === index}
                aria-controls={`experience-panel-${index}`}
                id={`experience-tab-${index}`}
                onClick={() => setSelectedIndex(index)}
                className={`
                  flex-shrink-0 lg:flex-shrink text-left px-4 py-3 rounded-lg transition-all
                  border-2 font-medium whitespace-nowrap lg:whitespace-normal
                  ${
                    selectedIndex === index
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">{exp.company}</span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {exp.period.split(" - ")[0]}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="flex-1">
            <Card
              role="tabpanel"
              id={`experience-panel-${selectedIndex}`}
              aria-labelledby={`experience-tab-${selectedIndex}`}
              className="p-6 sm:p-8 border-primary/30"
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {selectedExp.title}
                    </h3>
                    <p className="text-xl text-primary">
                      {selectedExp.company}
                    </p>
                  </div>
                  <time className="text-sm text-muted-foreground font-mono">
                    {selectedExp.period}
                  </time>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {selectedExp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span
                        className="text-primary mt-2 flex-shrink-0"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className="flex flex-wrap gap-2 pt-2"
                  role="list"
                  aria-label="Technologies used"
                >
                  {selectedExp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" role="listitem">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
