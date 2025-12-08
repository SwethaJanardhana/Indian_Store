import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onShopNow }) => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">✨ Premium Quality Products</div>
        <h1 className="hero-title">
          Discover Amazing
          <span className="hero-highlight"> Products</span>
        </h1>
        <p className="hero-subtitle">
          Your one-stop shop for quality groceries, snacks, and everyday essentials.
          Fresh products delivered right to your doorstep.
        </p>
        
        <button className="shop-now-btn" onClick={onShopNow}>
          <span>Shop Now</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Customers</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="floating-card card-1">
          <img src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=120&h=120&fit=crop" alt="Noodles" />
        </div>
        <div className="floating-card card-2">
          <img src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=120&h=120&fit=crop" alt="Snacks" />
        </div>
        <div className="floating-card card-3">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=120&h=120&fit=crop" alt="Spices" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

