import Image from "next/image";
import "../css/resume.css";

export default function Resume() {
  return (
    <main className="res-main">
      <div className="res-container">
        <header className="res-header">
          <div>
            <p className="res-eyebrow">Mudassir Ali</p>
            <h1 className="res-heading">My resume</h1>
          </div>

          <a
            href="/PortfolioResume.pdf"
            download="Mudassir_Ali_CV.pdf"
            className="res-btn"
          >
            <DownloadIcon />
            Download CV
          </a>
        </header>

        <figure className="res-sheet">
          <figcaption className="res-sheet-bar">
            <span className="res-sheet-name">resume.pdf</span>
            <a
              href="/PortfolioResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="res-sheet-link"
            >
              Open full size ↗
            </a>
          </figcaption>

          <Image
            src="/resume_desktop_full.png"
            alt="Mudassir Ali resume"
            width={1588}
            height={2246}
            quality={100}
            sizes="(max-width: 900px) 100vw, 860px"
            className="res-img"
            priority
          />
        </figure>

        <div className="res-footer">
          <p className="res-note">
            Looking for an internship opportunity. Open to frontend and
            full-stack roles.
          </p>
          <a
            href="/PortfolioResume.pdf"
            download="Mudassir_Ali_CV.pdf"
            className="res-btn is-primary"
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>
    </main>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}