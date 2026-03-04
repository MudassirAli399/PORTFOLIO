"use client";

import Image from "next/image";
import { useState } from "react";

export default function Resume() {
  const [hovered, setHovered] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050a14",
        fontFamily: "'Syne', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      
      <div
        style={{
          position: "fixed",
          top: "-180px",
          left: "-180px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-200px",
          right: "-200px",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ padding: "56px 32px 80px" }}
      >
        
        <div
          className="w-full flex items-center justify-between mb-12"
          style={{ maxWidth: "860px" }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#38bdf8",
                textTransform: "uppercase",
                marginBottom: "6px",
                opacity: 0.8,
              }}
            >
              Mudassir Ali
            </p>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.1,
                background:
                  "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              My Resume
            </h1>
          </div>

         
          <a
            href="/resume.pdf"
            download="Mudassir_Ali_CV.pdf"
           
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              borderRadius: "12px",
              border: hovered
                ? "1px solid rgba(56,189,248,0.6)"
                : "1px solid rgba(56,189,248,0.25)",
              background: hovered
                ? "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(56,189,248,0.18))"
                : "rgba(255,255,255,0.04)",
              color: hovered ? "#38bdf8" : "#94a3b8",
              fontSize: "13px",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: hovered
                ? "0 0 24px rgba(56,189,248,0.18), 0 8px 32px rgba(0,0,0,0.3)"
                : "0 4px 16px rgba(0,0,0,0.2)",
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
              backdropFilter: "blur(8px)",
              
            }}
          >
            
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: "transform 0.3s ease",
                transform: hovered ? "translateY(2px)" : "translateY(0)",
              }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        
        <div
          className="relative"
          style={{ maxWidth: "860px", width: "100%" }}
        
        >
         
          <div
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "22px",
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.35), rgba(56,189,248,0.35))",
              opacity: imgHovered ? 1 : 0,
              transition: "opacity 0.4s ease",
              zIndex: 0,
              filter: "blur(1px)",
            }}
          />

          
          <div
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "20px",
              overflow: "hidden",
              border: imgHovered
                ? "1px solid rgba(56,189,248,0.45)"
                : "1px solid rgba(255,255,255,0.07)",
              boxShadow: imgHovered
                ? "0 0 0 1px rgba(56,189,248,0.2), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(56,189,248,0.12)"
                : "0 0 0 1px rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.5)",
              transition: "all 0.4s ease",
              transform: imgHovered ? "scale(1.008)" : "scale(1)",
              background: "#0d1526",
            }}
          >
            
            <div
              className="flex items-center gap-2"
              style={{
                padding: "14px 20px",
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                resume.pdf
              </span>
            </div>

            
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "794 / 1123",
              }}
            >
              <Image
                src="/resume.jpg"
                alt="Mudassir Ali Resume"
                fill
                style={{ objectFit: "cover" }}
                priority
              />

             
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 70%, rgba(5,10,20,0.6) 100%)",
                  transition: "opacity 0.4s ease",
                  opacity: imgHovered ? 1 : 0.4,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>

        
        <div
          className="flex flex-col items-center mt-10 gap-4"
          style={{ maxWidth: "860px", width: "100%" }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(148,163,184,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            Looking for an internship opportunity — open to frontend & full-stack roles
          </p>

          <a
            href="/resume.pdf"
            download="Mudassir_Ali_CV.pdf"
            className="flex items-center gap-3"
            style={{
              padding: "16px 48px",
              borderRadius: "50px",
              background:
                "linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)",
              color: "#fff",
              fontSize: "14px",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow:
                "0 8px 32px rgba(56,189,248,0.25), 0 2px 8px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
           
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </main>
  );
}