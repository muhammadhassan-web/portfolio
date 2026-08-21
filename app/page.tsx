import { site } from "@/data/site";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Services } from "@/components/Services";
import { StackMarquee } from "@/components/StackMarquee";
import { Timeline } from "@/components/Timeline";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Nav />

      <Hero />

      <Section id="work" index="01" label="Selected work">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} columns={3} />
          ))}
        </div>
      </Section>

      <Section id="services" index="02" label="What I build">
        <Services />
      </Section>

      <Section id="stack" index="03" label="Tools">
        <StackMarquee />
      </Section>

      <Section id="history" index="04" label="History">
        <Timeline />
      </Section>

      <Section id="contact" index="05" label="Contact">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Tell me what
              <br />
              you need built.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Contract work, a role on your team, or a question about anything
              on this page. If you would rather just email, the address is
              below.
            </p>
            <a
              href={`mailto:${site.contact.email}`}
              data-cursor
              className="mt-6 inline-block border-b border-signal pb-0.5 font-mono text-sm text-signal transition-colors hover:border-text hover:text-text"
            >
              {site.contact.email}
            </a>
          </div>
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-dim sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Muhammad Hassan</span>
          <span>Islamabad, Pakistan</span>
        </div>
      </footer>
    </main>
  );
}
