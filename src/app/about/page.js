<<<<<<< HEAD
"use client";

import "../css/about.css";

const skills = [
  { name: "React.js", level: 85, icon: "⚛️" },
  { name: "Next.js", level: 80, icon: "▲" },
  { name: "JavaScript", level: 82, icon: "JS" },
  { name: "HTML & CSS", level: 90, icon: "🌐" },
  { name: "Tailwind CSS", level: 85, icon: "🎨" },
  { name: "Node.js", level: 60, icon: "🟢" },
  { name: "Git & GitHub", level: 75, icon: "🐙" },
  { name: "REST APIs", level: 70, icon: "🔗" },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the Punjab",
    year: "2022 — 2026",
    description:
      "Studying core computer science fundamentals including data structures, algorithms, databases, and software engineering principles.",
    status: "Ongoing",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Government College, Lahore",
    year: "2020 — 2022",
    description:
      "Completed intermediate education with a focus on mathematics and physics, building a strong analytical foundation.",
    status: "Completed",
  },
  {
    degree: "Matriculation",
    institution: "Punjab School, Lahore",
    year: "2018 — 2020",
    description:
      "Completed matriculation with distinction, developing early interest in technology and problem solving.",
    status: "Completed",
  },
];

export default function About() {
  return (
    <main className="about-main">
      {/* Ambient blobs */}
      <div className="blob blob-left" />
      <div className="blob blob-right" />

      <div className="about-container">

        {/* ── PAGE HEADER ── */}
        <div className="about-header">
          <span className="about-eyebrow">Who I Am</span>
          <h1 className="about-title">About <span className="about-title-accent">Me</span></h1>
          <p className="about-subtitle">
            A passionate web developer from Pakistan, building modern web experiences
            with clean code and creative thinking.
          </p>
        </div>

        {/* ── SKILLS SECTION ── */}
        <section className="section">
          <div className="section-label">
            <span className="section-dot" />
            Skills & Tech Stack
          </div>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div className="skill-card" key={skill.name} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="skill-top">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%`, animationDelay: `${i * 0.07 + 0.3}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION SECTION ── */}
        <section className="section">
          <div className="section-label">
            <span className="section-dot" />
            Education
          </div>

          <div className="timeline">
            {education.map((edu, i) => (
              <div className="timeline-item" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                {/* Line + dot */}
                <div className="timeline-line-col">
                  <div className="timeline-dot" />
                  {i < education.length - 1 && <div className="timeline-connector" />}
                </div>

                {/* Card */}
                <div className="timeline-card">
                  <div className="timeline-card-top">
                    <div>
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <p className="edu-institution">{edu.institution}</p>
                    </div>
                    <div className="edu-meta">
                      <span className="edu-year">{edu.year}</span>
                      <span className={`edu-badge ${edu.status === "Ongoing" ? "badge-ongoing" : "badge-done"}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <p className="edu-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
=======

export default function About() {
    return (

        <>
        <div className="h-[400px] border-2"> <h1> HEllo</h1></div>
        
        </>
    )
>>>>>>> 182255fbd23779e68ea16e16c355d050a008b786
}