import React from 'react';
import './BrandsSection.css';

const BrandsSection = () => {
  const brands = [
    {
      name: "Maggi",
      tagline: "2-Minute Happiness",
      color: "#e31837",
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop"
    },
    {
      name: "Haldiram's",
      tagline: "Taste of India",
      color: "#d4af37",
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&h=200&fit=crop"
    },
    {
      name: "TRS",
      tagline: "Quality Spices & More",
      color: "#2d5016",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-header">
          <span className="brands-label">Featured Brands</span>
          <h2 className="brands-title">Top Brands You Love</h2>
          <p className="brands-subtitle">Discover products from your favorite trusted brands</p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="brand-card"
              style={{ 
                '--brand-color': brand.color,
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="brand-image-wrapper">
                <img src={brand.image} alt={brand.name} className="brand-image" />
                <div className="brand-overlay"></div>
              </div>
              <div className="brand-info">
                <h3 className="brand-name">{brand.name}</h3>
                <p className="brand-tagline">{brand.tagline}</p>
              </div>
              <div className="brand-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

