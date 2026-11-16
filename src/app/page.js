"use client";

import "./css/home.css";
import { useState, useEffect } from "react";
import Image from "next/image";

const ROLES = ["Frontend Developer", "Backend Developer"];

export default function Home() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = ROLES[roleIndex];

      if (!deleting) {
        charIndex++;
        setDisplay(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1500); // pause on full word
          return;
        }
        timer = setTimeout(tick, 90);
      } else {
        charIndex--;
        setDisplay(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 50);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Portfolio</p>
          <h1 className="name">
            <span className="name-small">I am</span>
            Mudassir Ali
          </h1>

          <p className="description">
           Junior MERN Stack and React Developer pursuing a BS in Information Technology (graduating 2027), with hands-on experience in frontend and backend development. Skilled in React.js, Next.js, JavaScript, TypeScript, HTML5, and CSS3 for building responsive web interfaces. Experienced in backend development using Node.js, Express.js, MongoDB, MySQL, and Prisma ORM. Built and deployed full-stack applications with REST API integration, JWT authentication, and state management. Seeking a junior developer role (remote or onsite) to create clean, reusable, and maintainable web applications.
          </p>

          <p className="role" aria-live="polite">
            <span>{display}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </p>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <Image
              src="/mudassirali-image.jpeg"
              alt="Portrait of Mudassir Ali"
              fill
              sizes="(max-width: 600px) 70vw, (max-width: 900px) 320px, 380px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="contact">
        <h2 className="contact-title">Get in touch</h2>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">mudassira435@example.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Other email</span>
            <span className="contact-value">mudassirali7957@example.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">Pakistan</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Availability</span>
            <span className="contact-value">{`Open to Junior positions (Remote OR Onsite)`}</span>
          </div>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/MudassirAli399"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mudassir-ali-1994b8397"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.me/923067957399"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a href="mailto:mudassirali7957@example.com" className="social-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </section>
    </main>
  );
}