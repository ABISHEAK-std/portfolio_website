import { ArrowRight } from "lucide-react";
import portrait from "@/assets/coat_bg_big.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-10 px-4 sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl relative">
        {/* Ghost text */}
        <div className="absolute inset-x-0 top-[18%] sm:top-[14%] text-center pointer-events-none select-none">
          <h1
            className="font-display font-extrabold tracking-tighter text-foreground/10 leading-none"
            style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}
          >
            AI ENGINEER
          </h1>
        </div>

        <div className="relative grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-end pt-8">
          {/* Left text */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <p className="text-muted-foreground mb-3">Hey, I'm Abisheak.</p>
            <h2 className="font-display font-extrabold text-ink leading-[1.05] text-5xl sm:text-6xl lg:text-[5.25rem]">
              AI/ML Engineer & <br /> LLM Specialist
            </h2>
            <p className="mt-5 max-w-md text-foreground/70">
              Building intelligent systems that reason, act, and scale.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-7 py-4 text-base font-semibold shadow-lg shadow-ink/20 hover:-translate-y-0.5 transition-all"
              >
                View Resume <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full border border-ink/20 px-7 py-4 text-base font-semibold text-ink hover:bg-card transition-colors"
              >
                See Projects
              </a>
            </div>
          </div>

          {/* Photo column */}
          <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[420px] aspect-[4/5]">
            <div className="absolute inset-x-0 top-0 h-[96%] rounded-t-full rounded-b-3xl bg-gradient-to-b from-brand to-[oklch(0.55_0.2_270)]" />
            <img
              src={portrait}
              alt="S. Abisheak"
              width={768}
              height={896}
              className="relative -translate-y-4 z-10 w-full h-full object-contain object-bottom drop-shadow-2xl"
            />
            {/* Floating pills */}
            <div className="absolute z-20 top-[18%] -left-4 sm:-left-10 bg-card rounded-full px-4 py-2 shadow-lg animate-float-a">
              <span className="text-sm font-medium">Agentic AI</span>
            </div>
            <div className="absolute z-20 top-[10%] -right-2 sm:-right-8 bg-card rounded-full px-4 py-2 shadow-lg animate-float-b">
              <span className="text-sm font-medium">LLM Fine-Tuning</span>
            </div>
            <div className="absolute z-20 bottom-[20%] -left-6 sm:-left-14 bg-card rounded-full px-4 py-2 shadow-lg animate-float-b">
              <span className="text-sm font-medium">Open Source</span>
            </div>
            <div className="absolute z-20 bottom-[20%] -right-2 sm:-right-8 bg-card rounded-full px-4 py-2 shadow-lg animate-float-b">
              <span className="text-sm font-medium">AI Pipelines</span>
            </div>
          </div>

          {/* Right stat cards */}
          <div className="order-3 flex flex-col gap-3 lg:items-end animate-fade-up">
            <StatCard label1="Projects" label2="Built" value="15+" />
            <StatCard label1="Open Source Contributions" label2="Merged" value="2+" sub="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label1, label2, value, sub }: { label1: string; label2: string; value: string; sub?: string }) {
  return (
    <div className="bg-card rounded-2xl shadow-lg shadow-ink/5 px-5 py-4 flex items-center justify-between gap-6 min-w-[260px]">
      <div className="text-sm leading-tight">
        <div>{label1}</div>
        <div className="text-muted-foreground">{label2}</div>
      </div>
      <div className="font-display font-bold text-3xl text-ink">
        {value}
        {sub && <div className="text-xs font-sans font-normal text-muted-foreground -mt-1">{sub}</div>}
      </div>
    </div>
  );
}
