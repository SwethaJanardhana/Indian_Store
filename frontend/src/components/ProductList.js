import React from 'react';
import './ProductList.css';

// Category icons mapping
const categoryIcons = {
  "Atta and Flour Items": "🌾",
  "Rice and Rice Products": "🍚",
  "Dal Beans & Lentils": "🫘",
  "Spices": "🌶️",
  "Snack Items": "🍿",
  "Pickle Paste & Powder": "🥫",
  "Frozen Items and Fresh Vegetables": "🥬"
};

const ProductList = ({ products, onAddToCart, onProductClick, categoryName, onBack }) => {
  const categoryIcon = categoryName ? categoryIcons[categoryName] || "📦" : null;

  return (
    <section className="products-section">
      <div className="products-container">
        {/* Page Header */}
        <div className="products-page-header">
          <button className="back-btn" onClick={onBack}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Home</span>
          </button>

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span className="breadcrumb-item">Home</span>
            <svg className="breadcrumb-separator" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
            {categoryName ? (
              <>
                <span className="breadcrumb-item">Categories</span>
                <svg className="breadcrumb-separator" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                <span className="breadcrumb-item breadcrumb-current">{categoryName}</span>
              </>
            ) : (
              <span className="breadcrumb-item breadcrumb-current">All Products</span>
            )}
          </div>
        </div>

        {/* Category/Title Header */}
        <div className="products-header">
          {categoryName ? (
            <div className="category-page-header">
              <div className="category-icon-large">{categoryIcon}</div>
              <div className="category-header-content">
                <p className="category-subtitle">Category</p>
                <h1 className="category-title">{categoryName}</h1>
                <p className="category-product-count">
                  <span className="count-number">{products.length}</span> products available
                </p>
              </div>
            </div>
          ) : (
            <div className="all-products-header">
              <div className="all-products-icon">🛒</div>
              <div className="all-products-content">
                <p className="category-subtitle">Browse</p>
                <h1 className="category-title">All Products</h1>
                <p className="category-product-count">
                  <span className="count-number">{products.length}</span> products found
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => onProductClick(product)}
            >
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-badge">{product.brand}</div>
                <div className="product-overlay-hint">
                  <span>Click to view details</span>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-category">{product.category}</span>
                <div className="product-footer">
                  <span className="product-price">₹{product.price}</span>
                  <button
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="no-products">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <h3>No products found</h3>
            <p>Try adjusting your search or browse our categories</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
