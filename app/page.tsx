import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Navigation } from "@/components/navigation";
import { SectionLoader } from "@/components/section-loader";

const Experience = dynamic(
  () =>
    import("@/components/experience").then((mod) => ({
      default: mod.Experience,
    })),
  {
    loading: () => <SectionLoader />,
  }
);

const Skills = dynamic(
  () => import("@/components/skills").then((mod) => ({ default: mod.Skills })),
  {
    loading: () => <SectionLoader />,
  }
);

const Education = dynamic(
  () =>
    import("@/components/education").then((mod) => ({
      default: mod.Education,
    })),
  {
    loading: () => <SectionLoader />,
  }
);

const Achievements = dynamic(
  () =>
    import("@/components/achievements").then((mod) => ({
      default: mod.Achievements,
    })),
  {
    loading: () => <SectionLoader />,
  }
);

const Contact = dynamic(
  () =>
    import("@/components/contact").then((mod) => ({ default: mod.Contact })),
  {
    loading: () => <SectionLoader />,
  }
);

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
