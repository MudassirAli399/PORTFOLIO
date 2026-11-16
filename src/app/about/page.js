import "../css/about.css";

const skills = [
  { name: "React.js", level: 85, code: "Re" },
  { name: "Next.js", level: 80, code: "Nx" },
  { name: "JavaScript", level: 82, code: "JS" },
  { name: "HTML & CSS", level: 90, code: "H5" },
  { name: "Tailwind CSS", level: 85, code: "Tw" },
  { name: "Node.js", level: 60, code: "No" },
  { name: "Git & GitHub", level: 75, code: "Gt" },
  { name: "REST APIs", level: 70, code: "Api" },
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
    institution: "Govt. Pilot Higher Secondary School, Wahdat Road, Lahore",
    year: "2019 — 2021",
    description:
      "Completed matriculation with distinction, developing early interest in technology and problem solving.",
    status: "Completed",
  },
];

export default function About() {
  return (
    <main className="about-main">
      <div className="about-container">
        <header className="about-header">
          <p className="about-eyebrow">Who I am</p>
          <h1 className="about-title">About me</h1>
          <p className="about-subtitle">
            A passionate web developer from Pakistan, building modern web
            experiences with clean code and creative thinking.
          </p>
        </header>

        {/* Skills */}
        <section className="about-section" aria-labelledby="skills-heading">
          <h2 className="about-section-label" id="skills-heading">
            Skills &amp; tech stack
          </h2>

          <div className="about-skills">
            {skills.map((skill, i) => (
              <div className="about-skill" key={skill.name} style={{ "--i": i }}>
                <div className="about-skill-top">
                  <span className="about-skill-icon" aria-hidden="true">
                    {skill.code}
                  </span>
                  <span className="about-skill-name">{skill.name}</span>
                  <span className="about-skill-percent">{skill.level}%</span>
                </div>
                <div
                  className="about-bar"
                  role="progressbar"
                  aria-label={skill.name}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="about-bar-fill"
                    style={{ "--target": `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="about-section" aria-labelledby="edu-heading">
          <h2 className="about-section-label" id="edu-heading">
            Education
          </h2>

          <ol className="about-timeline">
            {education.map((edu, i) => (
              <li className="about-tl-item" key={edu.degree} style={{ "--i": i }}>
                <div className="about-tl-rail" aria-hidden="true">
                  <span className="about-tl-dot" />
                  <span className="about-tl-line" />
                </div>

                <article className="about-card about-tl-card">
                  <div className="about-tl-top">
                    <div className="about-tl-heading">
                      <h3 className="about-degree">{edu.degree}</h3>
                      <p className="about-institution">{edu.institution}</p>
                    </div>
                    <div className="about-meta">
                      <span className="about-year">{edu.year}</span>
                      <span
                        className={`about-badge ${
                          edu.status === "Ongoing" ? "is-ongoing" : "is-done"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <p className="about-edu-desc">{edu.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}