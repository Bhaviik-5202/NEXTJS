import React from 'react';
import '../styles/template1.css';

export default function Template1Page() {
  return (
    <div className="template1-container">
      <div className="template1-hero">
        <h2 className='template-h'>Template 1: Modern Minimalist</h2>
        <p>A clean and elegant design with minimalist approach</p>
      </div>

      <div className="template1-content">
        <section className="template1-section">
          <h3>Design Philosophy</h3>
          <p>
            This template follows modern web design principles with a focus on simplicity,
            clean typography, and ample whitespace. The minimalist approach creates a
            professional and sophisticated look.
          </p>
        </section>

        <section className="template1-section">
          <h3>Key Features</h3>
          <ul className="template1-list">
            <li>Clean and spacious layout</li>
            <li>Minimal color palette (Black, White, and Blue)</li>
            <li>Typography-focused design</li>
            <li>Responsive and mobile-friendly</li>
            <li>Fast loading and performance optimized</li>
          </ul>
        </section>

        <section className="template1-section">
          <h3>Implementation Details</h3>
          <p>
            This template uses CSS Grid and Flexbox for layout, CSS variables for theming,
            and media queries for responsive design. The color scheme is based on a
            professional palette with careful consideration for accessibility.
          </p>
        </section>
      </div>
    </div>
  );
}
