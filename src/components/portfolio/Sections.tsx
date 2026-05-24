import { Github, Linkedin, Mail, MapPin, ArrowRight, Trophy, Award, Code2 } from "lucide-react";

// export function About() {
//   return (
//     <section id="about" className="px-4 sm:px-8 py-24">
//       <div className="mx-auto max-w-7xl grid md:grid-cols-[1fr_2fr] gap-10">
//         <div>
//           <p className="text-sm font-semibold text-brand uppercase tracking-widest">About</p>
//           <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mt-3">
//             A student engineer building real AI.
//           </h2>
//         </div>
//         <p className="text-lg text-foreground/75 leading-relaxed">
//           I'm a 2nd-year CSE student at Chennai Institute of Technology, focused on
//           building production-ready AI systems. 
//           My work spans LLM fine-tuning with LoRA/QLoRA,
//           multi-agent pipelines with LangChain and LangGraph, computer vision with YOLOv8 and CLIP,
//           and full-stack deployment using FastAPI and React. 
//           I'm actively targeting AI/ML
//           internships and pursuing a long-term career in the European AI ecosystem.
//         </p>
//       </div>
//     </section>
//   );
// }

export function About() {
  return (
    <section id="about" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-7xl grid md:grid-cols-[1fr_2fr] gap-10">
        
        {/* Left */}
        <div>
          <p className="text-sm font-semibold text-brand uppercase tracking-widest">
            About
          </p>

          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mt-3">
            A student engineer building real AI.
          </h2>
        </div>

        {/* Right */}
        <ul className="space-y-5 text-lg font-medium text-foreground leading-relaxed">
          <li>
            • Building production-ready AI systems using LoRA, Unsloth, Peft for finetuning.
          </li>

          <li>
            • Working on Agentic AI Pipelines with LangChain, LangGraph and CrewAI.
          </li>

          <li>
            • Pursuing AI/ML internships and a long-term career ideas
            in the European AI ecosystem.
          </li>
        </ul>

      </div>
    </section>
  );
}

const SKILLS: { title: string; items: string[] }[] = [
  { title: "LLM & AI", items: ["LLM Fine-Tuning", "LoRA/QLoRA", "RAG Pipelines", "LangChain", "LangGraph", "Unsloth", "PEFT", "TRL", "Prompt Engineering", "Vector DBs"] },
  { title: "Computer Vision", items: ["YOLOv8", "CLIP/ViT", "OpenCV"] },
  { title: "Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace"] },
  { title: "Full-Stack", items: ["FastAPI", "React", "TailwindCSS", "Node.js"] },
  { title: "Automation", items: ["n8n", "Flowise"] },
  { title: "Languages", items: ["Python", "JavaScript", "Java", "C/C++"] },
  { title: "Cloud / DB", items: ["AWS (S3, Lambda, EC2)", "MySQL", "Redis", "MongoDB", "Pinecone", "ChromaDB", "Firebase"] },
  { title: "Tools", items: ["Google Colab", "Git", "Docker"] },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-8 py-24 bg-card/40">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-brand uppercase tracking-widest">Skills</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mt-3 mb-12 max-w-2xl">
          The stack behind the systems.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((g) => (
            <div key={g.title} className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-xl text-ink mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="tech-pill cursor-default rounded-full bg-background px-3 py-1.5 text-sm text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "FineTuned TinyLlama for Structured Output",
    repoUrl: "https://github.com/ABISHEAK-std/TinyLlama-structured-output-finetuned-using-Lora",
    accent: "oklch(0.6 0.22 265)",
    stack: ["Python", "HuggingFace", "PEFT (LoRA/QLoRA)", "TRL", "BitsAndBytes", "PyTorch", "TinyLlama"],
    bullets: [
      "QLoRA-based TinyLlama fine-tuned for schema-aligned JSON generation from natural language.",
      "End-to-end instruction-tuning pipeline with 4-bit quantization and LoRA integration.",
      "Trained on T4 GPU; adapters deployed to HuggingFace for public inference.",
    ],
  },
  {
    title: "QueryMind: Agentic NL-to-SQL System",
    repoUrl: "#",
    accent: "oklch(0.65 0.18 160)",
    stack: ["Python", "FastAPI", "LangChain", "n8n", "LLaMA", "SQLAlchemy", "MySQL", "React"],
    bullets: [
      "Agentic system converting natural language queries to validated SQL using LangChain + LLaMA.",
      "Schema-aware filtering, alias mapping, and write-operation validation pipeline.",
      "~60% token usage reduction via structured prompt design and context pruning.",
    ],
  },
  {
    title: "AAC Tamil Next-Word Prediction",
    repoUrl: "https://github.com/ABISHEAK-std/AAC-TAMIL-NEXT-WORD-PREDICTION",
    accent: "oklch(0.7 0.18 50)",
    stack: ["Python", "TensorFlow", "Bi-GRU", "LSTM", "BiLSTM", "IndicNLP", "Streamlit"],
    bullets: [
      "Tamil next-word prediction using Bi-LSTM and Bi-GRU with GloVe embeddings for assistive communication.",
      "Bridge-based Tamil→English→Tamil pipeline for low-resource NLP.",
      "79% top-3 accuracy, 86% top-5 accuracy.",
    ],
  },
  {
   title: "SupportOrchestrator : LLM Fine-Tuned on Customer Support Tickets",
repoUrl: "https://github.com/ABISHEAK-std/SupportOrchestrator-AI-LLM-FINETUNED-ON-CUSTOMER-TICKETS",
accent: "oklch(0.6 0.22 340)",
stack: [
  "Python",
  "QLoRA",
  "Llama-3.2-1B",
  "Unsloth",
  "ChromaDB",
  "FastAPI",
  "React"
],
bullets: [
  "Fine-tuned a 4-bit quantized LLM using QLoRA for structured customer-ticket intent and priority classification.",
  "Built a semantic dataset-cleaning pipeline using Sentence Transformers, embedding clustering, and hybrid filtering.",
  "Designed an intent-aware RAG workflow that maps support tickets into schema-aligned JSON for automated routing and policy retrieval."
],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-brand uppercase tracking-widest">Projects</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mt-3 mb-12 max-w-2xl">
          Selected work in AI engineering.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="h-1.5" style={{ background: p.accent }} />
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-display font-bold text-2xl text-ink">{p.title}</h3>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} repository on GitHub`}
                    className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground/70 shadow-sm transition-colors hover:border-brand/40 hover:bg-brand/10 hover:text-ink"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                <ul className="space-y-2 mb-5 text-foreground/75">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed">
                      <span className="text-brand mt-1.5 w-1 h-1 rounded-full bg-brand shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="tech-pill cursor-default rounded-full bg-background px-2.5 py-1 text-xs text-foreground/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ROLES = [
  {
    role: "AI Engineering Intern",
    company: "KaizenSpark Tech",
    period: "May 2026 – Present",
    location: "Chennai, Tamil Nadu",
    active: true,
    bullets: [
      "Building and deploying AI-powered solutions integrated into live products.",
      "Collaborating cross-functionally with product and engineering teams to scope and ship AI features.",
      "Working on end-to-end AI pipelines from model selection and prompt design to API integration and production deployment.",
      "Contributing to team workflows, code reviews, and iterative product improvement cycles.",
    ],
  },
  {
    role: "Enterprise Integration Services Intern",
    company: "Flex (Flextronics)",
    period: "Nov – Dec 2025",
    location: "Chennai, Tamil Nadu",
    active: false,
    bullets: [
      "Monitored B2B integration flows Integration Server and Trading Networks.",
      "Aided in providing AI powered solutions for managing the workflows of the company.",
      "Explored Salesforce CRM workflows and customer data pipelines.",
      "Built interactive Tableau dashboards converting raw data into structured business insights.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-8 py-24 bg-card/40">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-brand uppercase tracking-widest">Experience</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mt-3 mb-12 max-w-2xl">
          Where I've shipped.
        </h2>
        <div className="relative border-l-2 border-brand/30 pl-8 space-y-8 max-w-4xl">
          {ROLES.map((r) => (
            <div key={r.role} className="relative">
              <span className="absolute -left-[42px] top-6 w-4 h-4 rounded-full bg-brand ring-4 ring-background" />
              <div className="bg-card rounded-2xl p-7 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-xl text-ink">{r.role}</h3>
                    <p className="text-foreground/70">{r.company} · {r.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {r.active && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">{r.period}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-foreground/75">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed">
                      <span className="text-brand mt-1.5 w-1 h-1 rounded-full bg-brand shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CERTS = [
  "NPTEL — Data Analytics with Python",
  "NPTEL — Introduction to IoT",
  "Google Android Developer Virtual Internship",
  "LinkedIn — Data Structures in Java",
  "AWS Cloud Practitioner Essentials",
  "Cisco — Introduction to Data Science",
];

const ACHIEVEMENTS = [
  { icon: Trophy, title: "Ranked 4th Nationally", desc: "HACK36 Hackathon, MNNIT Allahabad" },
  { icon: Award, title: "WCHL Finalist", desc: "World Computer Hacker League — Regional Round (3rd Round)" },
  { icon: Code2, title: "500+ LeetCode Problems", desc: "Consistent algorithmic problem-solving" },
];

export function Certifications() {
  return (
    <section className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-brand uppercase tracking-widest">Recognition</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mt-3 mb-12 max-w-2xl">
          Certifications & achievements.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-7 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-ink mb-5">Certifications</h3>
            <ul className="space-y-3">
              {CERTS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-foreground/80">
                  <Award className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 grid place-items-center shrink-0">
                  <a.icon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-ink">{a.title}</h4>
                  <p className="text-sm text-foreground/70 mt-1">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-8 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-brand uppercase tracking-widest">Contact</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl text-ink mt-3">
          Let's Build Something Together
        </h2>
        <p className="mt-5 text-lg text-foreground/70">
          Open to AI/ML internships, research collaborations, and freelance AI projects.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-foreground/80">
          <a href="mailto:sakabisheak@gmail.com" className="inline-flex items-center gap-2 hover:text-ink">
            <Mail className="w-5 h-5 text-brand" /> sakabisheak@gmail.com
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand" /> Chennai, India
          </span>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <a href="https://github.com/ABISHEAK-std" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card grid place-items-center shadow-sm hover:-translate-y-0.5 transition-transform">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/s-abisheak-cit/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card grid place-items-center shadow-sm hover:-translate-y-0.5 transition-transform">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <div className="mt-10">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-8 py-4 text-base font-semibold shadow-lg shadow-ink/20 hover:-translate-y-0.5 transition-all"
          >
            Download Resume <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <footer className="mt-20 pt-8 border-t border-border text-sm text-muted-foreground">
          © {new Date().getFullYear()} S. Abisheak · Built with intent.
        </footer>
      </div>
    </section>
  );
}
