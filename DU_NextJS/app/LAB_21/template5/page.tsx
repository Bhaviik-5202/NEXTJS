import React from 'react';
import '../styles/template5.css';

export default function Template5Page() {
	return (
		<div className="template5-container">
			<header className="template5-hero">
				<div className="hero-left">
					<p className="hero-tag">Dark Tech UI</p>
					<h2 className='template-h'>Template 5: Neon Interface</h2>
					<p className="hero-subtitle">
						A futuristic layout with glass panels, neon accents, and bold typography.
					</p>
					<div className="hero-actions">
						<button className="primary-btn">Get Started</button>
						<button className="ghost-btn">View Docs</button>
					</div>
				</div>
				<div className="hero-right">
					<div className="stat-chip">
						<span className="stat-value">99.9%</span>
						<span className="stat-label">Uptime</span>
					</div>
					<div className="stat-chip">
						<span className="stat-value">42ms</span>
						<span className="stat-label">Latency</span>
					</div>
					<div className="stat-chip">
						<span className="stat-value">120K</span>
						<span className="stat-label">Users</span>
					</div>
				</div>
			</header>

			<section className="template5-section">
				<h3>Platform Modules</h3>
				<div className="module-grid">
					<div className="module-card">
						<h4>Analytics Core</h4>
						<p>Real-time insights with predictive modeling.</p>
					</div>
					<div className="module-card">
						<h4>Automation</h4>
						<p>Streamline workflows with smart triggers.</p>
					</div>
					<div className="module-card">
						<h4>Security</h4>
						<p>Multi-layer protection and audit trails.</p>
					</div>
					<div className="module-card">
						<h4>Deploy</h4>
						<p>Zero-downtime releases across regions.</p>
					</div>
				</div>
			</section>

			<section className="template5-section">
				<h3>Release Timeline</h3>
				<div className="timeline">
					<div className="timeline-item">
						<span className="timeline-dot" />
						<div>
							<h4>Q1: Foundation</h4>
							<p>Core APIs, authentication, and data layer.</p>
						</div>
					</div>
					<div className="timeline-item">
						<span className="timeline-dot" />
						<div>
							<h4>Q2: Scale</h4>
							<p>Auto-scaling infrastructure and monitoring.</p>
						</div>
					</div>
					<div className="timeline-item">
						<span className="timeline-dot" />
						<div>
							<h4>Q3: Intelligence</h4>
							<p>AI-assisted automation and insights.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
