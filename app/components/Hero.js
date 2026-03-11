export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content liftoff active text-center">
        <h1 className="main-title mb-8">
          <span className="ag-logo">
            <span className="blue">N</span>
            <span className="red">a</span>
            <span className="yellow">v</span>
            <span className="blue">e</span>
            <span className="green">e</span>
            <span className="red">n</span>
          </span> is your software development partner.
        </h1>
        
        <div className="search-container mb-12">
          <div className="search-bar-wrap mx-auto">
            <svg className="spark-icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13H7v-2h2v2zm0-4H7V7h2v2zm4 4h-2v-2h2v2zm0-4h-2V7h2v2z" />
            </svg>
            <div className="fake-input">Initialize my next project with React and Node.js...</div>
          </div>
        </div>

        <p className="hero-subtitle text-sub">
          Experience the weightless era of software engineering with Naveen J Panachinanickal.
        </p>

        <div className="action-buttons gap-4 flex justify-center mt-12">
          <button className="btn-primary">Explore Missions</button>
          <button className="btn-secondary">View Background</button>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 15vh;
        }
        .main-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 500;
          color: var(--foreground);
        }
        .text-sub {
          font-size: 1.25rem;
          color: var(--subtext);
          max-width: 600px;
          margin: 0 auto;
        }
        .btn-primary {
          background: #000;
          color: #fff;
          padding: 12px 32px;
          border-radius: 24px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        .btn-secondary {
          background: #f1f3f4;
          color: #3c4043;
          padding: 12px 32px;
          border-radius: 24px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        .btn-primary:hover { background: #333; }
        .btn-secondary:hover { background: #e8eaed; }
      `}</style>
    </section>
  );
}
