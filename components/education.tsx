import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="education-heading">
      <div className="container mx-auto max-w-5xl">
        <h2 id="education-heading" className="text-3xl sm:text-4xl font-bold mb-12 text-balance">
          Education
        </h2>
        <Card className="p-6 sm:p-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Bachelor of Engineering (B.E) in Mechanical Engineering
              </h3>
              <p className="text-lg text-primary mb-2">BITS Pilani, Goa</p>
              <time className="text-sm text-muted-foreground font-mono">2011 - 2015</time>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
