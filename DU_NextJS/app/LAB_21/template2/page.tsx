import "../styles/template2.css";

export default function Template2Page() {
  return (
    <div className="template2-container">
      <div className="template2-header">
        <h2>Template 2: Colorful & Vibrant</h2>
        <p>A dynamic and engaging design with vibrant colors</p>
      </div>

      <div className="template2-content">
        <div className="template2-intro">
          <p>
            This template celebrates bold colors and dynamic layouts, creating an engaging
            and modern user experience with carefully chosen color gradients and transitions.
          </p>
        </div>

        <div className="template2-features">
          <div className="feature-item feature-1">
            <h3>Colorful Design</h3>
            <p>Uses vibrant gradients and color combinations</p>
          </div>
          <div className="feature-item feature-2">
            <h3>Interactive Elements</h3>
            <p>Enhanced animations and smooth transitions</p>
          </div>
          <div className="feature-item feature-3">
            <h3>Modern Layout</h3>
            <p>CSS Grid-based responsive design</p>
          </div>
          <div className="feature-item feature-4">
            <h3>Engaging UX</h3>
            <p>Visual feedback and hover effects</p>
          </div>
        </div>

        <section className="template2-section">
          <h3>Color Palette</h3>
          <div className="color-palette">
            <div className="color-box color-primary">Primary</div>
            <div className="color-box color-secondary">Secondary</div>
            <div className="color-box color-accent1">Accent 1</div>
            <div className="color-box color-accent2">Accent 2</div>
          </div>
        </section>

        <section className="template2-section">
          <h3>Services Offered</h3>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-number">01</span>
              <h4>Web Design</h4>
              <p>Create stunning visual experiences</p>
            </div>
            <div className="service-card">
              <span className="service-number">02</span>
              <h4>Development</h4>
              <p>Build scalable web applications</p>
            </div>
            <div className="service-card">
              <span className="service-number">03</span>
              <h4>Optimization</h4>
              <p>Improve performance and SEO</p>
            </div>
            <div className="service-card">
              <span className="service-number">04</span>
              <h4>Maintenance</h4>
              <p>Keep your site running smoothly</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
