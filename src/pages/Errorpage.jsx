export default function ErrorPage() {
  return (
    <div className="not-found-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Outfit:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .not-found-root {
          min-height: 100vh;
          background-color: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          position: relative;
        }

        /* Ambient background grid */
        .not-found-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(197,160,80,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,160,80,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%);
        }

        /* Glow orb */
        .glow-orb {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(197,160,80,0.07) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: pulse-glow 4s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
        }

        .container {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          max-width: 680px;
          width: 100%;
          animation: fade-in-up 0.8s ease forwards;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Big 404 number */
        .error-code {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(10rem, 22vw, 18rem);
          font-weight: 300;
          line-height: 0.85;
          letter-spacing: -4px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(197,160,80,0.25);
          position: relative;
          display: block;
          user-select: none;
        }

        .error-code-fill {
          position: absolute;
          inset: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(10rem, 22vw, 18rem);
          font-weight: 300;
          line-height: 0.85;
          letter-spacing: -4px;
          background: linear-gradient(135deg, #c5a050 0%, #e8c97a 40%, #c5a050 70%, #a07830 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.5;
          animation: shimmer 3s ease-in-out infinite;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        .number-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: -1rem;
        }

        /* Decorative line */
        .divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 2rem auto;
          width: fit-content;
          animation: fade-in-up 0.8s ease 0.2s both;
        }

        .divider-line {
          width: 60px;
          height: 0.5px;
          background: linear-gradient(90deg, transparent, rgba(197,160,80,0.5));
        }

        .divider-line.right {
          background: linear-gradient(90deg, rgba(197,160,80,0.5), transparent);
        }

        .divider-diamond {
          width: 6px;
          height: 6px;
          background: #c5a050;
          transform: rotate(45deg);
          opacity: 0.8;
        }

        .headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 4vw, 2.4rem);
          font-weight: 400;
          color: #f0ead8;
          letter-spacing: 0.5px;
          line-height: 1.3;
          margin-bottom: 1rem;
          animation: fade-in-up 0.8s ease 0.3s both;
        }

        .subtext {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(240,234,216,0.45);
          letter-spacing: 0.3px;
          line-height: 1.7;
          max-width: 420px;
          margin: 0 auto 2.5rem;
          animation: fade-in-up 0.8s ease 0.4s both;
        }

        /* Buttons */
        .btn-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          animation: fade-in-up 0.8s ease 0.5s both;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0.8rem 2rem;
          background: linear-gradient(135deg, #c5a050, #a07830);
          color: #0a0a0a;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(197,160,80,0.3); }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary:active { transform: translateY(0); }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0.8rem 2rem;
          background: transparent;
          color: rgba(240,234,216,0.6);
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          border: 0.5px solid rgba(197,160,80,0.3);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          border-color: rgba(197,160,80,0.7);
          color: #c5a050;
          background: rgba(197,160,80,0.05);
        }

        /* Corner decorations */
        .corner {
          position: absolute;
          width: 40px;
          height: 40px;
          opacity: 0.3;
        }

        .corner-tl { top: 24px; left: 24px; border-top: 1px solid #c5a050; border-left: 1px solid #c5a050; }
        .corner-tr { top: 24px; right: 24px; border-top: 1px solid #c5a050; border-right: 1px solid #c5a050; }
        .corner-bl { bottom: 24px; left: 24px; border-bottom: 1px solid #c5a050; border-left: 1px solid #c5a050; }
        .corner-br { bottom: 24px; right: 24px; border-bottom: 1px solid #c5a050; border-right: 1px solid #c5a050; }

        /* Floating particles */
        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #c5a050;
          border-radius: 50%;
          opacity: 0;
          animation: float-up var(--dur) ease-in infinite;
          animation-delay: var(--delay);
          left: var(--x);
          bottom: -10px;
        }

        @keyframes float-up {
          0% { opacity: 0; transform: translateY(0) scale(1); }
          20% { opacity: 0.6; }
          80% { opacity: 0.2; }
          100% { opacity: 0; transform: translateY(-80vh) scale(0.3); }
        }

        @media (max-width: 480px) {
          .corner { display: none; }
          .btn-group { flex-direction: column; align-items: stretch; }
          .btn-primary, .btn-secondary { justify-content: center; }
        }
      `}</style>

      {/* Corner decorations */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* Glow */}
      <div className="glow-orb" />

      {/* Particles */}
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--x': `${8 + i * 8}%`,
              '--dur': `${4 + (i % 4) * 1.5}s`,
              '--delay': `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* 404 */}
        <div className="number-wrapper">
          <span className="error-code">404</span>
          <span className="error-code-fill" aria-hidden="true">404</span>
        </div>

        {/* Divider */}
        <div className="divider">
          <div className="divider-line" />
          <div className="divider-diamond" />
          <div className="divider-line right" />
        </div>

        <h1 className="headline">This Page Has Left the Building</h1>
        <p className="subtext">
          The page you're looking for may have been moved, renamed, or no longer exists.
          Let's get you back on track.
        </p>

        <div className="btn-group">
          <a href="/" className="btn-primary">
            ← Return Home
          </a>
          <a href="/contact" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}