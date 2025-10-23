import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { StackOverflowIcon } from "@/components/icons/stackoverflow-icon";

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      role="banner"
      aria-label="Hero section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Kranthi Kumar Julakanti
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Senior Software Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I build scalable, high-performance web and mobile applications
              using Next.js, React, React Native and Graphql with a track record
              of improving performance, accelerating feature delivery, and
              enabling seamless user experiences.
              <br />
              Let's collaborate and create something awesome together!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#experience">View Experience</a>
              </Button>
            </div>

            <div
              className="flex gap-4 pt-4"
              role="list"
              aria-label="Social media links"
            >
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none rounded"
                aria-label="Email Kranthi Kumar"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none rounded"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={CONTACT_INFO.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none rounded"
                aria-label="StackOverflow profile (opens in new tab)"
              >
                <StackOverflowIcon className="h-5 w-5" />
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none rounded"
                aria-label="GitHub profile (opens in new tab)"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"
                aria-hidden="true"
              />
              <div
                className="relative bg-card border border-border rounded-2xl p-8 space-y-4"
                role="img"
                aria-label="Code snippet showing developer profile information"
              >
                <div className="font-mono text-sm text-muted-foreground">
                  <span className="text-primary">const</span> developer = {"{"}
                </div>
                <div className="pl-4 space-y-2 font-mono text-sm">
                  <div>
                    <span className="text-accent">name:</span>{" "}
                    <span className="text-foreground">
                      &quot;Kranthi Kumar&quot;
                    </span>
                    ,
                  </div>
                  <div>
                    <span className="text-accent">role:</span>{" "}
                    <span className="text-foreground">
                      &quot;AVP-Engineering&quot;
                    </span>
                    ,
                  </div>
                  <div>
                    <span className="text-accent">skills:</span> [
                    <span className="text-foreground">&quot;Next.js&quot;</span>
                    , <span className="text-foreground">&quot;React&quot;</span>
                    ,{" "}
                    <span className="text-foreground">
                      &quot;TypeScript&quot;
                    </span>
                    ],
                  </div>
                  <div>
                    <span className="text-accent">experience:</span>{" "}
                    <span className="text-foreground">
                      &quot;8+ years&quot;
                    </span>
                    ,
                  </div>
                  <div>
                    <span className="text-accent">location:</span>{" "}
                    <span className="text-foreground">&quot;India&quot;</span>
                  </div>
                </div>
                <div className="font-mono text-sm text-muted-foreground">
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
