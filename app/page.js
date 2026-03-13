"use client";

const featuredProjects = [
  {
    id: "01",
    title: "Invotools",
    company: "Ayatacom Tech Solutions",
    period: "May 2024 - Present",
    summary:
      "Helped move a serverless invoice platform from prototype energy into production reality.",
    details: [
      "Built Java microservices on AWS Lambda with API Gateway and DynamoDB single-table patterns.",
      "Automated environment setup and releases with AWS SAM to reduce manual deployment work.",
      "Improved compliance and reliability through e-invoicing research, Cognito auth, JWT flows, and stronger test coverage.",
    ],
    stack: ["Java", "AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "AWS SAM", "JUnit"],
  },
  {
    id: "02",
    title: "Toolbase",
    company: "Open Build Network",
    period: "Open source contribution",
    summary:
      "Contributed to a collaborative builder platform with a focus on modern product engineering.",
    details: [
      "Worked on Toolbase as part of the Open Build Network open source collaboration.",
      "Contributed using TypeScript and Rust in a shared engineering environment.",
      "Strengthened experience across product thinking, collaboration, and multi-language development.",
    ],
    stack: ["TypeScript", "Rust", "Open Source", "Collaboration"],
    link: "http://dev.toolbase.in/",
  },
  {
    id: "03",
    title: "Farzi",
    company: "Technical Project",
    period: "Academic build",
    summary:
      "A furniture ecommerce experience that blended application engineering with computer vision.",
    details: [
      "Built with Django, Python, Bootstrap, and SQLite.",
      "Implemented image classification to categorize furniture from product images.",
      "Explored practical deep learning inside a user-facing commerce workflow.",
    ],
    stack: ["Django", "Python", "SQLite", "Bootstrap", "Deep Learning"],
  },
];

const timeline = [
  {
    year: "2019 - 2024",
    title: "Integrated MCA",
    body:
      "Completed Master of Computer Applications (Integrated) at Amal Jyothi College of Engineering under APJ Abdul Kalam Technological University with a CGPA of 8.1.",
  },
  {
    year: "2024 - Now",
    title: "Backend in the real world",
    body:
      "Joined Ayatacom Tech Solutions as a Junior Software Engineer and started building production SaaS systems on AWS.",
  },
  {
    year: "Along the way",
    title: "Engineering discipline",
    body:
      "Practiced SOLID principles, clean code, testing with JUnit, REST API design, and iterative delivery inside Agile teams.",
  },
];

const certifications = [
  "Oracle Java Foundations (2025)",
  "REST API Intermediate, HackerRank (2025)",
  "Python for Data Science and AI, IBM (2023)",
  "Scrum Fundamentals Certified (2022)",
  "AWS Academy Cloud Foundations (2021)",
];

const strengths = [
  "Java-first backend engineering",
  "AWS serverless architecture",
  "Scalable REST API design",
  "Authentication and security with Cognito and JWT",
  "Testing, refactoring, and code quality",
  "Collaborative Agile delivery",
];

function SectionEyebrow({ children }) {
  return <p className="section-eyebrow">{children}</p>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <span>{project.id}</span>
        <span>{project.company}</span>
        <span>{project.period}</span>
      </div>

      <div className="project-copy">
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="project-grid">
          <ul className="detail-list">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>

          <div className="stack-cloud">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        {project.link ? (
          <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
            Visit project
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="film-grain" />

      <header className="topbar">
        <a href="#home" className="brandmark">
          NJP
        </a>
        <nav className="topnav">
          <a href="#story">Story</a>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Connect</a>
        </nav>
      </header>

      <section id="home" className="hero-panel">
        <div className="hero-copy">
          <SectionEyebrow>Software Engineer • Kochi, Kerala</SectionEyebrow>
          <h1>
            I build cloud-native software with the calm of a craftsman and the scale of
            modern AWS systems.
          </h1>
          <p className="hero-lead">
            This portfolio is designed like a slow cinematic reveal: who I am, what I have
            built, and how I am growing into an engineer who turns complexity into clear,
            reliable products.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button-primary">
              Enter the work
            </a>
            <a
              href="https://www.linkedin.com/in/naveenjpanachinanickal/"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-frame">
          <div className="frame-label">Now Playing</div>
          <div className="frame-title">Naveen J Panachinanickal</div>
          <p>
            Junior Software Engineer focused on serverless backend systems, disciplined
            engineering, and product-minded execution.
          </p>
          <div className="signal-list">
            <span>Java</span>
            <span>AWS Lambda</span>
            <span>DynamoDB</span>
            <span>TypeScript</span>
          </div>
        </div>
      </section>

      <section id="story" className="story-grid section-block">
        <div className="story-intro">
          <SectionEyebrow>The Story</SectionEyebrow>
          <h2>From Thodupuzha roots to production-grade cloud systems.</h2>
          <p>
            I am a motivated software engineer with hands-on experience developing SaaS
            products using AWS cloud-native and serverless technologies. I enjoy clean Java,
            scalable backend design, and solving hard problems with structure instead of
            noise.
          </p>
        </div>

        <div className="story-cards">
          <article className="info-card">
            <span className="card-kicker">Identity</span>
            <h3>Builder of dependable systems</h3>
            <p>
              My work leans toward architecture that feels invisible to the user: fast APIs,
              secure authentication, resilient deployments, and maintainable services.
            </p>
          </article>

          <article className="info-card accent-card">
            <span className="card-kicker">Strengths</span>
            <ul className="detail-list">
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <span className="card-kicker">Current Focus</span>
            <p>
              Shipping reliable backend features, improving code quality, and growing deeper
              in architecture, open source collaboration, and high-impact software delivery.
            </p>
          </article>
        </div>
      </section>

      <section id="work" className="section-block">
        <SectionEyebrow>Selected Work</SectionEyebrow>
        <div className="section-heading">
          <h2>Projects and product chapters that define my work.</h2>
          <p>
            A mix of SaaS engineering, open source collaboration, and applied experimentation.
          </p>
        </div>

        <div className="project-stack">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="journey" className="section-block split-section">
        <div>
          <SectionEyebrow>The Journey</SectionEyebrow>
          <h2>A timeline shaped by consistency, learning, and real shipping pressure.</h2>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.title} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div>
          <SectionEyebrow>Proof Points</SectionEyebrow>
          <h2>Learning backed by certifications, awards, and strong academic foundations.</h2>
        </div>

        <div className="proof-grid">
          <article className="info-card">
            <span className="card-kicker">Certifications</span>
            <ul className="detail-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <span className="card-kicker">Education</span>
            <p>
              Amal Jyothi College of Engineering, Kanjirapally
              <br />
              Integrated MCA, 2019 - 2024
              <br />
              CGPA 8.1
            </p>
            <p className="muted-copy">
              Earlier academic milestones include Higher Secondary with 89.6% and High
              School with a 10.0 CGPA.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-panel section-block">
        <SectionEyebrow>Final Frame</SectionEyebrow>
        <h2>Let’s build something sharp, scalable, and memorable.</h2>
        <p>
          If you are hiring, collaborating, or just want to talk engineering, I would love
          to connect.
        </p>

        <div className="contact-actions">
          <a href="mailto:naveenjpanachinanickal@gmail.com" className="button-primary">
            naveenjpanachinanickal@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/naveenjpanachinanickal/"
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            Open LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
