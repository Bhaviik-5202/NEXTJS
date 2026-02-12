import React from 'react';
import '../styles/about.css';

export default function AboutPage() {
  return (
    <div className="content">
      <h2>About LAB 21</h2>
      <p>
        LAB 21 focuses on translating real-world HTML/CSS templates into a NextJS application while keeping the
        structure clean, reusable, and responsive. Each template showcases different typography, color systems,
        and layout techniques.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Clean Structure</h3>
          <p>Dedicated routes, shared layout, and organized styles for scalability.</p>
        </div>
        <div className="feature-card">
          <h3>Reusable Patterns</h3>
          <p>Grids, cards, and sections are built using repeatable UI patterns.</p>
        </div>
        <div className="feature-card">
          <h3>Responsive Design</h3>
          <p>All templates include breakpoints to support mobile, tablet, and desktop.</p>
        </div>
      </div>

      <section className="info-section">
        <h3>Templates Included</h3>
        <ul>
          <li>Template 1: Modern minimalist layout.</li>
          <li>Template 2: Colorful and energetic aesthetic.</li>
          <li>Template 3: Corporate and professional theme.</li>
          <li>Template 4: Eco-inspired, calm visuals.</li>
          <li>Template 5: Dark tech, neon accents.</li>
        </ul>
      </section>
    </div>
  );
}
