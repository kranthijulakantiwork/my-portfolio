export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-8 text-balance">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a Senior Software Engineer with over 8 years of experience building scalable web and mobile
            applications. Currently serving as AVP at Knight Fintech, I lead technology integration and platform
            consolidation initiatives following strategic acquisitions.
          </p>
          <p>
            My expertise lies in architecting and developing fintech solutions using modern technologies like Next.js,
            React, React Native, and GraphQL. I have a proven track record of scaling products from single-partner
            implementations to multi-lender platforms handling ₹1000+ crore loan books.
          </p>
          <p>
            I&apos;m passionate about performance optimization, developer experience, and building configuration-driven
            architectures that reduce integration time from weeks to days. I thrive in leadership roles where I can
            mentor teams while staying hands-on with code.
          </p>
        </div>
      </div>
    </section>
  )
}
