"use client";

import { useState } from "react";
import Link from "next/link";


const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with Next.js and Tailwind CSS. Features smooth animations, dark theme, and fully responsive layout.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    liveLink: "https://yourportfolio.com",
    githubLink: "https://github.com/mudassir/portfolio",
    gradient: "linear-gradient(135deg, #6366f1, #38bdf8)",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce application with product listing, cart functionality, and user authentication using REST APIs.",
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "https://yourapp.com",
    githubLink: "https://github.com/mudassir/ecommerce",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather app that fetches live data from OpenWeather API. Shows forecast, humidity, and wind speed beautifully.",
    tags: ["React", "REST API", "CSS"],
    liveLink: "https://weatherapp.com",
    githubLink: "https://github.com/mudassir/weather",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
  },
];



function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(56,189,248,0.4)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.1)"
          : "0 8px 32px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s ease",
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── Gradient Top Bar ── */}
      <div
        style={{
          height: "4px",
          background: project.gradient,
          width: "100%",
        }}
      />

      {/* ── Gradient Banner ── */}
      <div
        style={{
          height: "120px",
          background: project.gradient,
          opacity: hovered ? 0.15 : 0.08,
          transition: "opacity 0.35s ease",
          position: "relative",
        }}
      >
        {/* Big faded project number */}
        <span
          style={{
            position: "absolute",
            right: "20px",
            bottom: "8px",
            fontFamily: "'Syne', sans-serif",
            fontSize: "72px",
            fontWeight: 900,
            color: "#fff",
            opacity: 0.07,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* ── Card Body ── */}
      <div style={{ padding: "24px 26px 28px" }}>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "20px",
            fontWeight: 800,
            color: "#e2e8f0",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "13.5px",
            fontWeight: 300,
            color: "#64748b",
            lineHeight: 1.75,
            marginBottom: "20px",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "11px",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "99px",
                background: "rgba(56,189,248,0.08)",
                border: "1px solid rgba(56,189,248,0.18)",
                color: "#38bdf8",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "20px",
          }}
        />

        {/* Links */}
        <div style={{ display: "flex", gap: "12px" }}>

          {/* Live Demo */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              padding: "11px 0",
              borderRadius: "10px",
              background: project.gradient,
              color: "#fff",
              fontSize: "12px",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* Globe icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Live Demo
          </a>

          {/* GitHub */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              padding: "11px 0",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
              fontSize: "12px",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(56,189,248,0.35)";
              e.currentTarget.style.color = "#38bdf8";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* GitHub icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
            GitHub
          </a>

        </div>
      </div>
    </div>
  );
}


export default function Projects() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050a14",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Ambient blobs */}
      <div style={{ position: "fixed", top: "-180px", left: "-180px", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-200px", right: "-200px", width: "640px", height: "640px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 32px 100px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "'Syne', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#38bdf8",
              opacity: 0.8,
              marginBottom: "12px",
            }}
          >
            What I've Built
          </span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(36px, 6vw, 52px)",
              fontWeight: 900,
              color: "#e2e8f0",
              lineHeight: 1.05,
              marginBottom: "16px",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h1>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              color: "#64748b",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            A collection of things I've designed, built, and shipped — from
            frontend UIs to full-stack applications.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </main>
  );
}