export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-8 text-balance">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a hands-on frontend engineering leader with over 9 years of experience building scalable web
            and mobile products. I currently work as Manager Engineering at AuxoAI, building React-based finance
            dashboards for Western Digital.
          </p>
          <p>
            My expertise lies in architecting and developing fintech solutions using modern technologies like Next.js,
            React, React Native, and GraphQL. I have a proven track record of scaling products from single-partner
            implementations to multi-lender platforms handling a ₹1,000 crore loan book.
          </p>
          <p>
            I&apos;m passionate about performance optimization, developer experience, and building configuration-driven
            architectures that reduce integration time from weeks to days. I enjoy mentoring engineers while staying close to architecture, code quality, and delivery.
          </p>
        </div>
      </div>
    </section>
  )
}
