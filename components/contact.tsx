import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"
import { StackOverflowIcon } from "@/components/icons/stackoverflow-icon"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: CONTACT_INFO.linkedin,
  },
  {
    icon: StackOverflowIcon,
    label: "StackOverflow",
    value: "View Profile",
    href: CONTACT_INFO.stackoverflow,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or potential collaborations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6" role="list" aria-label="Contact methods">
          {contactInfo.map((contact) => {
            const Icon = contact.icon
            return (
              <Card key={contact.label} className="p-6 hover:border-primary/50 transition-colors" role="listitem">
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label={`${contact.label}: ${contact.value}`}
                >
                  <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href={`mailto:${CONTACT_INFO.email}`}>Send me an email</a>
          </Button>
        </div>
      </div>

      <footer
        className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        role="contentinfo"
      >
        <p>© 2025 Kranthi Kumar Julakanti. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </section>
  )
}
