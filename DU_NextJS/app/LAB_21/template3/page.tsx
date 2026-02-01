import "../styles/template3.css";

export default function Template3Page() {
  return (
    <div className="template3-container">
      <div className="template3-header">
        <div className="header-overlay">
          <h2>Template 3: Corporate Professional</h2>
          <p>A formal and business-oriented design template</p>
        </div>
      </div>

      <div className="template3-content">
        <section className="template3-section">
          <h3>About Our Company</h3>
          <p>
            We are a leading organization in the technology industry, committed to
            delivering excellence and innovation. Our corporate template reflects our
            professional standards and commitment to quality.
          </p>
        </section>

        <section className="template3-section">
          <h3>Our Services</h3>
          <div className="services-table">
            <div className="table-header">
              <div className="table-cell">Service</div>
              <div className="table-cell">Description</div>
              <div className="table-cell">Price Range</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Consulting</div>
              <div className="table-cell">Strategic business consultation</div>
              <div className="table-cell">High</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Development</div>
              <div className="table-cell">Custom software development</div>
              <div className="table-cell">Medium</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Support</div>
              <div className="table-cell">24/7 Technical support</div>
              <div className="table-cell">Medium</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Training</div>
              <div className="table-cell">Staff training programs</div>
              <div className="table-cell">Low</div>
            </div>
          </div>
        </section>

        <section className="template3-section">
          <h3>Team Members</h3>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">JD</div>
              <h4>John Doe</h4>
              <p className="position">CEO & Founder</p>
              <p className="bio">20+ years of industry experience</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">SM</div>
              <h4>Sarah Miller</h4>
              <p className="position">CTO</p>
              <p className="bio">Expert in cloud technologies</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">RJ</div>
              <h4>Robert Johnson</h4>
              <p className="position">Lead Developer</p>
              <p className="bio">Full-stack development specialist</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">EW</div>
              <h4>Emma Wilson</h4>
              <p className="position">Project Manager</p>
              <p className="bio">Certified project management professional</p>
            </div>
          </div>
        </section>

        <section className="template3-section">
          <h3>Company Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <p className="stat-label">Team Members</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <p className="stat-label">Years in Business</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
        </section>

        <section className="template3-section">
          <h3>Contact Information</h3>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Address:</strong>
              <p>123 Business Avenue, Corporate Park, CA 94000</p>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <p>info@company.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
