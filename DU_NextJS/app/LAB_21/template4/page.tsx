import "../styles/template4.css";

export default function Template4Page() {
	return (
		<div className="template4-container">
			<header className="template4-hero">
				<div className="hero-content">
					<h2>Template 4: Eco & Nature</h2>
					<p>Soft gradients, natural tones, and calm typography.</p>
				</div>
				<div className="hero-badge">Sustainable UI</div>
			</header>

			<section className="template4-section">
				<h3>Mission</h3>
				<p>
					This template is inspired by eco-friendly branding. It uses gentle greens, airy spacing, and organic
					shapes to communicate sustainability and trust.
				</p>
			</section>

			<section className="template4-section">
				<h3>Core Initiatives</h3>
				<div className="initiative-grid">
					<div className="initiative-card">
						<h4>Clean Energy</h4>
						<p>Promoting renewable sources for a greener future.</p>
					</div>
					<div className="initiative-card">
						<h4>Green Design</h4>
						<p>Minimal waste and sustainable materials in all projects.</p>
					</div>
					<div className="initiative-card">
						<h4>Community</h4>
						<p>Local partnerships that create long-term impact.</p>
					</div>
				</div>
			</section>

			<section className="template4-section">
				<h3>Highlights</h3>
				<div className="highlight-grid">
					<div className="highlight-card">
						<span className="highlight-number">12</span>
						<span className="highlight-label">Eco Programs</span>
					</div>
					<div className="highlight-card">
						<span className="highlight-number">35%</span>
						<span className="highlight-label">Energy Saved</span>
					</div>
					<div className="highlight-card">
						<span className="highlight-number">8K</span>
						<span className="highlight-label">Trees Planted</span>
					</div>
					<div className="highlight-card">
						<span className="highlight-number">24</span>
						<span className="highlight-label">Community Partners</span>
					</div>
				</div>
			</section>

			<section className="template4-section">
				<h3>Newsletter</h3>
				<div className="newsletter-card">
					<p>Get monthly sustainability insights and project updates.</p>
					<button className="newsletter-btn">Join the Community</button>
				</div>
			</section>
		</div>
	);
}
