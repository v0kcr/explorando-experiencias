import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  CalendarDays,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GitBranch,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Send,
  Server,
  Sparkles,
  Terminal,
  Trophy,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Pulseboard",
    description: "Real-time observability workspace for small engineering teams. Built to make noisy systems feel legible.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    metric: "−42% triage time",
    accent: "lime",
    href: "https://github.com/marcuschen/pulseboard",
    demo: "https://pulseboard-demo.vercel.app",
  },
  {
    number: "02",
    title: "Local First",
    description: "An offline-capable knowledge base with conflict-free sync and a keyboard-first editing model.",
    tags: ["React", "SQLite", "CRDT"],
    metric: "8.4k GitHub stars",
    accent: "slate",
    href: "https://github.com/marcuschen/local-first",
    demo: "https://local-first-demo.vercel.app",
  },
  {
    number: "03",
    title: "Tide API",
    description: "A tiny, opinionated toolkit for shipping resilient APIs with observability from the first request.",
    tags: ["Node.js", "OpenTelemetry", "Docker"],
    metric: "19 contributors",
    accent: "teal",
    href: "https://github.com/marcuschen/tide-api",
    demo: "https://tide-api-docs.vercel.app",
  },
];

const skills = [
  { name: "TypeScript", category: "Language", level: 96, note: "daily driver" },
  { name: "React / Next.js", category: "Frontend", level: 94, note: "product systems" },
  { name: "Node.js", category: "Backend", level: 91, note: "services + tooling" },
  { name: "PostgreSQL", category: "Data", level: 87, note: "schema design" },
  { name: "AWS / Docker", category: "Infra", level: 82, note: "ship + operate" },
  { name: "Testing / CI", category: "Quality", level: 89, note: "confidence loops" },
];

const articles = [
  { date: "AUG 14, 2024", title: "Designing APIs that stay boring under pressure", type: "Engineering notes", read: "7 min read" },
  { date: "JUN 02, 2024", title: "The quiet power of a good internal tool", type: "Product craft", read: "5 min read" },
  { date: "MAR 19, 2024", title: "What I learned shipping a CRDT to production", type: "Open source", read: "11 min read" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="site-shell min-h-screen overflow-hidden">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Marcus Chen inicio">
            <span className="brand-mark">MC</span>
            <span className="brand-name">Marcus Chen<span className="brand-dot">.</span></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
            <a href="#work" onClick={() => setMenuOpen(false)}>Proyectos</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Stack</a>
            <a href="#writing" onClick={() => setMenuOpen(false)}>Escritura</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
            <a className="nav-github" href="https://github.com/marcuschen" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menú" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="status-dot" /> Disponible para proyectos seleccionados <span className="eyebrow-line" /></div>
            <h1>Software con<br /><span>intención.</span></h1>
            <p className="hero-lede">Soy Marcus, desarrollador full-stack enfocado en construir productos digitales rápidos, útiles y difíciles de romper.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Ver proyectos <ArrowUpRight size={17} /></a>
              <a className="text-link" href="https://github.com/marcuschen" target="_blank" rel="noreferrer"><Github size={17} /> github.com/marcuschen</a>
            </div>
          </div>
          <div className="hero-terminal reveal-up delay-1" aria-label="Resumen de actividad de Marcus">
            <div className="terminal-top"><span className="terminal-lights"><i /><i /><i /></span><span>marcus@studio ~ /now</span><span className="terminal-live">LIVE</span></div>
            <div className="terminal-body">
              <div className="terminal-line"><span className="terminal-prompt">$</span> whoami</div>
              <div className="terminal-output large">full-stack developer</div>
              <div className="terminal-line"><span className="terminal-prompt">$</span> cat focus.txt</div>
              <div className="terminal-output">systems that feel simple</div>
              <div className="terminal-line"><span className="terminal-prompt">$</span> git status</div>
              <div className="terminal-output green">● shipping with intention</div>
              <div className="terminal-footer"><span>↑ 24 commits this week</span><span>⌘ K to explore</span></div>
            </div>
          </div>
          <div className="hero-scroll"><span className="scroll-line" /> scroll to explore</div>
        </section>

        <section className="signal-strip" aria-label="Resumen profesional">
          <div className="container signal-grid">
            <div><span className="signal-value">06+</span><span className="signal-label">años construyendo</span></div>
            <div><span className="signal-value">24</span><span className="signal-label">proyectos enviados</span></div>
            <div><span className="signal-value">19</span><span className="signal-label">contribuciones open source</span></div>
            <div className="signal-quote">“La complejidad es deuda.<br /><em>La claridad, una ventaja.</em>”</div>
          </div>
        </section>

        <section className="section container" id="work">
          <div className="section-heading"><div><span className="section-kicker">01 / trabajo seleccionado</span><h2>Cosas que he <span>construido.</span></h2></div><a className="section-arrow" href="https://github.com/marcuschen?tab=repositories" target="_blank" rel="noreferrer">Ver todos los repos <ArrowRight size={18} /></a></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-card-top"><span className="project-number">{project.number}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Repositorio de ${project.title}`}><Github size={19} /></a></div>
                <div className="project-visual"><div className="visual-grid" /><div className="visual-code"><span>const</span> {project.title.toLowerCase().replace(" ", "")} <b>=</b> <i>ready</i><br /><span>await</span> ship({"{"}impact: <b>true</b>{"}"})</div><span className="visual-corner">{project.number} / 03</span></div>
                <div className="project-content"><div className="project-title-row"><h3>{project.title}</h3><span className="project-metric">{project.metric}</span></div><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a><a href={project.href} target="_blank" rel="noreferrer">Source <ExternalLink size={14} /></a></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading"><div><span className="section-kicker">02 / caja de herramientas</span><h2>El stack detrás<br />de la <span>idea.</span></h2></div><p className="section-intro">No colecciono tecnologías. Elijo las que hacen que un producto sea más claro, rápido y confiable.</p></div>
            <div className="skills-layout"><div className="skills-list">{skills.map((skill) => <div className="skill-row" key={skill.name}><div className="skill-meta"><span><b>{skill.name}</b><small>{skill.category}</small></span><span className="skill-note">{skill.note} <strong>{skill.level}%</strong></span></div><div className="skill-track"><span style={{ width: `${skill.level}%` }} /></div></div>)}</div><div className="stack-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-center"><Code2 size={27} /><span>build<br />better</span></div><div className="orbit-icon icon-top"><Braces size={17} /></div><div className="orbit-icon icon-right"><Database size={17} /></div><div className="orbit-icon icon-bottom"><Server size={17} /></div><div className="orbit-icon icon-left"><GitBranch size={17} /></div></div></div>
          </div>
        </section>

        <section className="section open-source-section container">
          <div className="oss-card"><div className="oss-icon"><GitBranch size={28} /></div><div className="oss-copy"><span className="section-kicker">03 / más allá del trabajo</span><h2>Construir en público.</h2><p>Creo que el software mejora cuando las ideas circulan. Mantengo herramientas open source, escribo sobre decisiones de ingeniería y comparto lo que aprendo en el camino.</p><a className="button button-secondary" href="https://github.com/marcuschen" target="_blank" rel="noreferrer">Explorar GitHub <ArrowUpRight size={16} /></a></div><div className="oss-stats"><div><Trophy size={17} /><strong>8.4k</strong><span>stars acumuladas</span></div><div><Sparkles size={17} /><strong>19</strong><span>contributors</span></div><div><Layers3 size={17} /><strong>12</strong><span>repos activos</span></div></div></div>
        </section>

        <section className="section container writing-section" id="writing">
          <div className="section-heading"><div><span className="section-kicker">04 / notas de campo</span><h2>Escribo para<br /><span>pensar mejor.</span></h2></div><a className="section-arrow" href="https://medium.com/@marcuschen" target="_blank" rel="noreferrer">Ver todos los artículos <ArrowRight size={18} /></a></div>
          <div className="article-list">{articles.map((article, index) => <a href="https://medium.com/@marcuschen" target="_blank" rel="noreferrer" className="article-row" key={article.title}><span className="article-index">0{index + 1}</span><div className="article-main"><span className="article-date"><CalendarDays size={14} /> {article.date} · {article.type}</span><h3>{article.title}</h3></div><span className="article-read">{article.read} <ArrowUpRight size={16} /></span></a>)}</div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-inner"><div className="footer-heading"><span className="section-kicker">05 / ponte en contacto</span><h2>¿Tienes una idea<br />que merece <span>código?</span></h2><p>Cuéntame qué estás construyendo. Respondo en 2–3 días laborables.</p></div><form className="contact-form" onSubmit={handleSubmit}>{sent ? <div className="form-success"><Check size={24} /><h3>Mensaje recibido.</h3><p>Gracias por escribir. Te responderé pronto.</p><button type="button" onClick={() => setSent(false)}>Enviar otro mensaje</button></div> : <><label><span>Tu email</span><input type="email" placeholder="you@company.com" required /></label><label><span>Cuéntame brevemente</span><textarea placeholder="Qué estás construyendo..." rows={3} required /></label><button className="button button-primary form-submit" type="submit">Enviar mensaje <Send size={16} /></button></>}</form><div className="footer-bottom"><a className="brand" href="#top"><span className="brand-mark">MC</span><span className="brand-name">Marcus Chen<span className="brand-dot">.</span></span></a><div className="footer-links"><a href="mailto:hello@marcuschen.dev"><Mail size={15} /> hello@marcuschen.dev</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="/marcus-chen-resume.txt" download><Download size={15} /> Descargar CV</a></div><span className="copyright">© 2024 Marcus Chen</span></div></div>
      </footer>
    </div>
  );
}

export function IconLegend() {
  return <Terminal size={16} />;
}
