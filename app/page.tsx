"use client";

import type { ReactNode } from "react";

type Project = {
  id: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  details: string[];
  stack: string[];
  link?: string;
};

type TimelineItem = {
  year: string;
  title: string;
  body: string;
};

type Certification = {
  title: string;
  year: string;
  url?: string;
};

type DockItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const featuredProjects: Project[] = [
  {
    id: "01",
    title: "Invotools",
    company: "Ayatacom Tech Solutions",
    period: "May 2024 - Present",
    summary:
      "Helped move a serverless invoice platform from prototype energy into production reality.",
    details: [
      "Built Java microservices on AWS Lambda with API Gateway and DynamoDB single-table patterns.",
      "Focused mainly on backend feature development for the product, translating requirements into working services and APIs.",
      "Improved compliance and reliability through e-invoicing research, Cognito auth, JWT flows, and stronger test coverage.",
    ],
    stack: ["Java 17", "AWS Serverless", "Maven", "JUnit"],
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

const timeline: TimelineItem[] = [
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

const certifications: Certification[] = [
  {
    title: "REST API Intermediate, HackerRank",
    year: "2025",
    url: "https://www.hackerrank.com/certificates/0fdcf0891bee",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    year: "2023",
    url: "https://www.credly.com/badges/1b3dda48-78af-4836-8a78-288ad8ae108a/linked_in_profile",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    year: "2022",
    url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=933353",
  },
  {
    title: "AWS Academy Graduate: Introduction to Cloud Semester 1",
    year: "2021",
    url: "https://www.credly.com/badges/085faa52-a560-48c7-915a-af6966ff370a/linked_in_profile",
  },
  {
    title: "AWS Academy Cloud Foundations Training Badge",
    year: "2021",
    url: "https://www.credly.com/badges/0864b43f-47e8-4418-a767-7d017cf7ee0a/linked_in_profile",
  },
];

const strengths = [
  "Java-first backend engineering",
  "AWS serverless architecture",
  "Scalable REST API design",
  "Authentication and security with Cognito and JWT",
  "Testing, refactoring, and code quality",
  "Collaborative Agile delivery",
];

const resumeUrl =
  "https://www.canva.com/design/DAGgLdUmFqg/FaLT2J80ClpnZ8MAUI4OwA/edit?utm_content=DAGgLdUmFqg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

const contactDockItems: DockItem[] = [
  {
    label: "Email",
    href: "mailto:naveenjpanachinanickal@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.92-.25L12 11.64 19.08 6.5H4.92Zm14.58 11V8.02l-6.99 5.07a.9.9 0 0 1-1.02 0L4.5 8.02v9.48c0 .28.22.5.5.5h14c.28 0 .5-.22.5-.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naveenjpanachinanickal/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.56 8.97H3.5V20.5h3.06V8.97Zm.2-3.56c0-.98-.73-1.74-1.73-1.74S3.3 4.43 3.3 5.4c0 .96.72 1.74 1.71 1.74h.02c1 0 1.73-.78 1.73-1.74ZM20.5 13.39c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87v-1.6H9.73c.04 1.06 0 11.92 0 11.92h3.06v-6.66c0-.36.03-.71.13-.96.29-.71.95-1.45 2.06-1.45 1.46 0 2.05 1.1 2.05 2.72v6.35H20.5v-7.11Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/naveen-j-panachinanickal",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.66-.2.66-.46 0-.23-.01-.98-.01-1.78-2.42.45-3.05-.59-3.24-1.13-.1-.28-.52-1.14-.89-1.37-.3-.16-.72-.55-.01-.56.67-.01 1.15.62 1.31.87.77 1.3 2 .94 2.5.72.08-.56.3-.94.54-1.16-2.14-.24-4.38-1.07-4.38-4.76 0-1.05.37-1.91.99-2.58-.1-.24-.43-1.22.1-2.54 0 0 .81-.26 2.65.98a9.1 9.1 0 0 1 4.82 0c1.84-1.25 2.65-.98 2.65-.98.53 1.32.2 2.3.1 2.54.62.67.99 1.53.99 2.58 0 3.7-2.25 4.52-4.39 4.76.35.3.65.88.65 1.79 0 1.29-.01 2.33-.01 2.65 0 .26.18.56.66.46A9.5 9.5 0 0 0 12 2.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: resumeUrl,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 3.5A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.44a1.5 1.5 0 0 0-.44-1.06l-3-3A1.5 1.5 0 0 0 14 4H7Zm7 .94 2.56 2.56H14V4.44ZM8.5 10.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h3.25a.75.75 0 0 1 0 1.5H9.25a.75.75 0 0 1-.75-.75Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

type SectionEyebrowProps = {
  children: ReactNode;
};

function SectionEyebrow({ children }: SectionEyebrowProps) {
  return <p className="section-eyebrow">{children}</p>;
}

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
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

          <div className="stack-panel">
            <span className="stack-label">Built With</span>
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
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
      <div className="contact-dock" aria-label="Quick contact links">
        {contactDockItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="dock-item"
            aria-label={item.label}
            title={item.label}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <header className="topbar">
        <a href="#home" className="brandmark">
          Naveen J Panachinanickal
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
            I build software products with the calm of a craftsman and the scale of modern
            AWS systems.
          </h1>

          <div className="hero-actions">
            <a href="#work" className="button-primary">
              Enter the work
            </a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="button-secondary">
              View Resume
            </a>
            <a
              href="https://github.com/naveen-j-panachinanickal"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-frame">
          <img
            src="/hero-main.jpeg"
            alt="Naveen J Panachinanickal portrait"
            className="hero-portrait"
          />
          <div className="hero-frame-overlay" />
          <div className="frame-title">Naveen J Panachinanickal</div>
          <p>
            Software Engineer focused on serverless backend systems, disciplined
            engineering, and product-minded execution.
          </p>
          <div className="signal-list">
            <span>Maven</span>
            <span>Java 17</span>
            <span>Spring Boot</span>
            <span>JUnit</span>
            <span>RUST</span>
            <span>AWS Services</span>
            <span>TypeScript</span>
            <span>Next.js</span>
          </div>
        </div>
      </section>

      <section id="story" className="story-grid section-block">
        <div className="story-intro">
          <SectionEyebrow>The Story</SectionEyebrow>
          <h2>From ideas to production-grade cloud systems.</h2>
          <p>
            I am a motivated software engineer with hands-on experience developing SaaS
            products using AWS cloud-native and serverless technologies. I enjoy clean Java,
            scalable backend design, and solving hard problems with structure instead of
            noise.
          </p>
        </div>

        <div className="story-cards">
          <article className="info-card accent-card signal-card">
            <span className="card-kicker">Future Direction</span>
            <h3>Still early, and that is the exciting part.</h3>
            <p className="signal-note">
              I want to keep growing into the kind of engineer who can design strong
              systems, contribute to meaningful products, and lead with both clarity and
              craft.
            </p>
            <p className="signal-note">
              The goal is not only to write code, but to create software that feels
              dependable, scalable, and thoughtfully made for the people who use it.
            </p>
          </article>

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
          <h2>Learning backed by certifications and strong academic foundations.</h2>
        </div>

        <div className="proof-grid">
          <article className="info-card certifications-card">
            <span className="card-kicker">Certifications</span>
            <ul className="detail-list">
              {certifications.map((item) => (
                <li key={`${item.title}-${item.year}`}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-link">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </li>
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
        <SectionEyebrow>Let's Connect</SectionEyebrow>
        <h2>Let’s build something sharp, scalable, and memorable.</h2>
        <p>
          If you are hiring, collaborating, or just want to talk engineering, I would love
          to connect.
        </p>

        <div className="contact-actions">
          <a href="mailto:naveenjpanachinanickal@gmail.com" className="button-primary">
            naveenjpanachinanickal@gmail.com
          </a>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="button-secondary">
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/naveenjpanachinanickal/"
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            Open LinkedIn
          </a>
          <a
            href="https://github.com/naveen-j-panachinanickal"
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            Open GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
