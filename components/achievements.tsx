import { Card } from "@/components/ui/card"
import { Award, Star, TrendingUp, Gauge, Users, Zap } from "lucide-react"

const achievements = [
  {
    icon: TrendingUp,
    title: "₹1,000 crore loan book",
    description: "Contributed to a digital lending platform that supported a ₹1,000 crore loan book in two years.",
  },
  {
    icon: Gauge,
    title: "19% faster LCP",
    description: "Improved Largest Contentful Paint by 19% and reduced bundle size by 450 KB.",
  },
  {
    icon: Users,
    title: "7 lenders · 16 partners",
    description: "Helped scale the lending platform while reducing partner onboarding from one week to one day.",
  },
  {
    icon: Zap,
    title: "₹5 crore credit-line activation",
    description: "Delivered the frontend for a credit-line product in one month, supporting ₹5 crore in first-month activations.",
  },
  {
    icon: Award,
    title: "Bug Bounty Recognition",
    description: "Reported a bug in Medium's app as part of the Bug Bounty Program",
  },
  {
    icon: Star,
    title: "Star of the Month",
    description: 'Received "Star of the Month" award for outstanding work at Niro',
  },
]

export function Achievements() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-labelledby="achievements-heading">
      <div className="container mx-auto max-w-5xl">
        <h2 id="achievements-heading" className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
          Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-6" role="list" aria-label="Professional achievements">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className="p-6 sm:p-8 hover:border-primary/50 transition-colors" role="listitem">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
