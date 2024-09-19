import { IconArrow } from "./components/Icons";
import { Project } from "./components/Project";
import { Certificate } from "./components/Certificate";
import { Connect } from "./components/Connect";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col py-20 px-5 sm:px-0 tracking-tight text-2xl">
        <p className="text-secondary">
          Transforming ideas into interactive web experiences.
        </p>
        <p className="text-tertiary">
          I collaborate with teams to develop and launch innovative web and
          mobile applications — and occasionally create my own.
        </p>

        <div className="flex items-center gap-3 mt-10 text-sm tracking-tight">
          <a
            href="mailto:anahmolinari@gmail.com"
            aria-label="Contact Ana Molinari via email"
            rel="noopener noreferrer"
            className="py-[10px] px-4 bg-button rounded-lg text-contrast text-center sm:scale-100 sm:hover:scale-110 sm:transition-transform sm:duration-300 sm:ease group"
          >
            Get in touch
          </a>

          <a
            href="/assets/resume.pdf"
            download="Ana_Molinari_Resume.pdf"
            aria-label="Download Ana Molinari's Resume"
            rel="noopener noreferrer"
            className=" flex items-center gap-1 py-1 px-4 text-tertiary sm:hover:text-primary sm:transition-colors sm:duration-300 sm:ease"
          >
            See resume
            <IconArrow />
          </a>
        </div>
      </section>
      <Project />
      <Certificate />
      <Connect />
    </main>
  );
}
