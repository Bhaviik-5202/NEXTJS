import Link from "next/link";

export default function Lab21Page() {
  return (
    <>
      <div className="content">
        <div className="hero">
          <div>
            <h2>LAB 21: CSS Templates in NextJS</h2>
            <p>
              Explore multiple UI templates implemented with modern CSS. Each template demonstrates a unique
              visual style, layout strategy, and responsive behavior.
            </p>
          </div>
          <div className="hero-actions">
            <Link href="/LAB_21/template1" className="primary-btn">
              View Templates
            </Link>
            <Link href="/LAB_21/About" className="secondary-btn">
              About LAB 21
            </Link>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Part A: Styled Website</h3>
            <p>
              A clean base layout with reusable components, structured typography, and a consistent grid.
            </p>
          </div>
          <div className="feature-card">
            <h3>Part B: HTML/CSS Template</h3>
            <p>
              Professional templates translated into a NextJS structure with scoped styles and responsive layouts.
            </p>
          </div>
          <div className="feature-card">
            <h3>Part C: Multiple Styles</h3>
            <p>
              Five distinct visual themes showing design variety: minimalist, vibrant, corporate, eco, and dark tech.
            </p>
          </div>
        </div>

        <section className="template-gallery">
          <h3>Template Gallery</h3>
          <div className="template-grid">
            <Link href="/LAB_21/template1" className="template-tile">
              <span className="tile-title">Template 1</span>
              <span className="tile-subtitle">Modern Minimalist</span>
            </Link>
            <Link href="/LAB_21/template2" className="template-tile">
              <span className="tile-title">Template 2</span>
              <span className="tile-subtitle">Colorful & Vibrant</span>
            </Link>
            <Link href="/LAB_21/template3" className="template-tile">
              <span className="tile-title">Template 3</span>
              <span className="tile-subtitle">Corporate Professional</span>
            </Link>
            <Link href="/LAB_21/template4" className="template-tile">
              <span className="tile-title">Template 4</span>
              <span className="tile-subtitle">Eco & Nature</span>
            </Link>
            <Link href="/LAB_21/template5" className="template-tile">
              <span className="tile-title">Template 5</span>
              <span className="tile-subtitle">Dark Tech</span>
            </Link>
          </div>
        </section>

        <section className="info-section">
          <h3>What you will practice</h3>
          <ul>
            <li>Organizing routes and layouts in NextJS.</li>
            <li>Building template-specific CSS without conflicts.</li>
            <li>Designing responsive layouts with grid and flexbox.</li>
            <li>Applying consistent typography and spacing systems.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
