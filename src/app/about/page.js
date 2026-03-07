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
    degree: "Bachelor of Science in Information Technology",
    institution: "University of the Punjab",
    year: "2023 — 2027",
    description:
      "Studying core computer science fundamentals including data structures, algorithms, databases, and software engineering principles.",
    status: "Ongoing",
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "Government College, University Lahore",
    year: "2021 — 2023",
    description:
      "Completed intermediate education with a focus on mathematics and computer, building a strong analytical foundation.",
    status: "Completed",
  },
  {
    degree: "Matriculation in Computer",
    institution: "Govt.Pilot Higher Secondary School Wahdat Road Lahore",
    year: "2019 — 2021",
    description:
      "Completed matriculation with distinction, developing early interest in technology and problem solving.",
    status: "Completed",
  },
];

export default function About() {
  return (
    <main className="about-main">
     
      <div className="blob blob-left" />
      <div className="blob blob-right" />

      <div className="about-container">

        <div className="about-header">
          <span className="about-eyebrow">Who I Am</span>
          <h1 className="about-title">About <span className="about-title-accent">Me</span></h1>
          <p className="about-subtitle">
            A passionate web developer from Pakistan, building modern web experiences
            with clean code and creative thinking.
          </p>
        </div>

        
        <section className="section">
          <div className="section-label">
            <span className="section-dot" />
            Skills & Tech Stack
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name} >
                <div className="skill-top">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%`,height:"2px", backgroundColor: "#38bdf8" }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section className="section">
          <div className="section-label">
            <span className="section-dot" />
            Education
          </div>

          <div className="timeline">
            {education.map((edu) => (
              <div className="timeline-item" key={edu.degree} >
                
                <div className="timeline-line-col">
                  <div className="timeline-dot" />
                   <div className="timeline-connector" />
                </div>

                
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

}