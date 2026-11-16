import "../css/projects.css";

const projects = [
  {
    id: 1,
    title: "Finance Tracker",
    description:"Developed a full-stack Personal Finance Tracker using React, Tailwind CSS, Node.js, Express.js, and MongoDB. Implemented JWT authentication, budget management, income/expense tracking, and financial reporting with a secure, responsive, and user-friendly interface.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveLink: "https://mern-finance-tracker-three.vercel.app",
    githubLink: "https://github.com/MudassirAli399/MERN-FINANCE-TRACKER",
    tone: "#b5451b",
    toneSoft: "#f0d9c9",
  },
  {
    id: 2,
    title: "Blogging Platform",
    description:"Developed a full-stack blogging platform using React, Node.js, Express.js, and MySQL with Prisma ORM (v6). Implemented REST APIs and complete CRUD functionality, enabling users to create, publish, edit, and delete blog posts with efficient database management.",
    tags: ["React","Prisma (v6)","MySQL","Express.js","Node.js"],
    liveLink: "https://blogging-website-two-khaki.vercel.app",
    githubLink:
      "https://github.com/MudassirAli399/Blogging_website",
    tone: "#5b6b2f",
    toneSoft: "#e3e6cc",
  },
  {
    id: 3,
    title: "Typing Master",
    description:"Developed an interactive typing practice application using HTML, CSS, and JavaScript, featuring real-time WPM and accuracy tracking. Implemented DOM manipulation and event handling to provide instant feedback and a responsive user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://typing-master-project-123.vercel.app",
    githubLink:
      "https://github.com/MudassirAli399/HTML-PROJECT",
    tone: "#2d4a8a",
    toneSoft: "#d9e0f0",
  },
];

function ProjectCard({ project, index }) {
  return (
    <article
      className="proj-card"
      style={{
        "--tone": project.tone,
        "--tone-soft": project.toneSoft,
        "--i": index,
      }}
    >
      <div className="proj-banner" aria-hidden="true">
        <span className="proj-number">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="proj-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>

        <ul className="proj-tags">
          {project.tags.map((tag) => (
            <li key={tag} className="proj-tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="proj-links">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-btn is-primary"
            aria-label={`Live demo of ${project.title}`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Live demo
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-btn"
            aria-label={`${project.title} source code on GitHub`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <main className="proj-main">
      <div className="proj-container">
        <header className="proj-header">
          <p className="proj-eyebrow">What I’ve built</p>
          <h1 className="proj-heading">My projects</h1>
          <p className="proj-subtitle">
            A collection of things I’ve designed, built and shipped, from
            frontend UIs to full-stack applications.
          </p>
        </header>

        <div className="proj-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}