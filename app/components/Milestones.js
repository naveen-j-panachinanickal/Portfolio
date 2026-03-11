export default function Milestones() {
  const missions = [
    {
      id: "M01",
      title: "Real-time Operations Engine",
      desc: "Architected a high-concurrency data pipeline for distributed systems."
    },
    {
      id: "M02",
      title: "Agentic UI Framework",
      desc: "Developed a responsive design system for autonomous AI agents."
    },
    {
      id: "M03",
      title: "Cloud Infrastructure Synthesis",
      desc: "Optimized multi-region deployments for 99.99% system availability."
    }
  ];

  return (
    <section id="milestones" className="milestones-section liftoff">
      <div className="container max-w-4xl px-8">
        <h2 className="section-title mb-16 text-center">Operational History</h2>
        
        <div className="mission-list flex flex-col gap-12">
          {missions.map((mission, i) => (
            <div key={i} className="mission-item flex gap-8 items-start">
              <span className="mission-id font-mono text-google-blue">{mission.id}</span>
              <div className="mission-content">
                <h3 className="mission-title text-2xl mb-2">{mission.title}</h3>
                <p className="mission-desc text-subtext text-lg">{mission.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
        }
        .mission-id {
          font-size: 1.1rem;
          font-weight: 700;
          background: #e8f0fe;
          padding: 4px 12px;
          border-radius: 4px;
        }
        .mission-title {
          font-weight: 500;
        }
        .mission-desc {
          color: var(--subtext);
        }
        .mission-item {
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--card-border);
        }
        .mission-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </section>
  );
}
