export default function Epilogue() {
  return (
    <section id="epilogue" className="epilogue-section liftoff">
      <div className="container max-w-2xl px-8 text-center">
        <h2 className="section-title mb-6">Bridge Communication</h2>
        <p className="text-subtext mb-12 text-lg">
          Ready to synthesize the next generation of software? Initiate a direct bridge.
        </p>
        
        <div className="bridge-interface p-12 bg-white border border-card-border rounded-3xl shadow-sm">
          <p className="font-mono text-google-blue mb-8">CONNECTION_PROTOCOL: SECURE</p>
          <button className="btn-primary w-full py-4 rounded-full text-xl font-semibold mb-4 bg-black text-white">
            Initiate Contact
          </button>
          <div className="flex justify-center gap-6 mt-8">
            <span className="text-subtext cursor-pointer hover:underline">LinkedIn</span>
            <span className="text-subtext cursor-pointer hover:underline">GitHub</span>
            <span className="text-subtext cursor-pointer hover:underline">Terminal</span>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-card-border text-subtext text-sm uppercase tracking-widest">
          © 2024 NAVEEN J PANACHINANICKAL // ANTIGRAVITY PARTNER
        </footer>
      </div>

      <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
        }
        .bridge-interface {
          transition: all 0.3s ease;
        }
        .bridge-interface:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
        }
      `}</style>
    </section>
  );
}
