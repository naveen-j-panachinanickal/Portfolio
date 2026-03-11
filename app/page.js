"use client";
import { useEffect } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import Forge from "./components/Forge";
import Milestones from "./components/Milestones";
import Epilogue from "./components/Epilogue";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll(".liftoff").forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative">
      <ParticleBackground />

      <Hero />
      
      <section id="journey" className="liftoff">
        <div className="container max-w-3xl text-center px-8">
          <h2 className="section-title mb-8">The Weightless Mindset</h2>
          <p className="text-xl text-subtext leading-relaxed">
            I am Naveen J Panachinanickal, a software engineer dedicated to building 
            agentic experiences that transcend traditional interfaces. 
            By removing the gravity of technical complexity, I craft solutions 
            that feel intuitive, etherial, and powerful.
          </p>
        </div>
      </section>

      <Forge />
      <Milestones />
      <Epilogue />

      <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
