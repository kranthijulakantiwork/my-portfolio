import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: [
      "Next.js",
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MUI",
    ],
  },
  {
    title: "State, APIs & Architecture",
    skills: ["Redux", "Redux Toolkit", "React Query", "GraphQL", "REST APIs", "Node.js", "Service Workers", "Frontend Architecture"],
  },
  {
    title: "Performance & Quality",
    skills: ["Core Web Vitals", "LCP Optimization", "Code Splitting", "Lazy Loading", "Sentry", "Jest"],
  },
  {
    title: "Development Tools",
    skills: ["Git", "Xcode", "Firebase"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-labelledby="skills-heading">
      <div className="container mx-auto max-w-5xl">
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
          Technologies I work with
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-3" role="list" aria-label={`${category.title} list`}>
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    role="listitem"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
