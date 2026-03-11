export default function Forge() {
  const categories = [
    {
      title: "Core Engines",
      skills: ["React", "Next.js", "Java", "Node.js"]
    },
    {
      title: "Infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "Intelligence",
      skills: ["Vector DBs", "LangChain", "LLM Integration"]
    }
  ];

  return (
    <section id="forge" className="forge-section liftoff">
      <div className="container px-8">
        <h2 className="section-title mb-16 text-center">The Knowledge Sandbox</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="skill-card p-8">
              <h3 className="cat-title mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
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
        .skill-card {
          border: 1px solid var(--card-border);
          border-radius: 16px;
          background: white;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .cat-title {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--subtext);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .skill-pill {
          padding: 6px 16px;
          background: #f8f9fa;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #3c4043;
          border: 1px solid #e8eaed;
        }
      `}</style>
    </section>
  );
}
