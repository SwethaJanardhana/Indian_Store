import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product || !isOpen) return null;

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setQuantity(1);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setQuantity(1);
    }
  };

  return (
    <div className="product-detail-overlay" onClick={handleOverlayClick}>
      <div className="product-detail-modal">
        <button className="modal-close-btn" onClick={() => { onClose(); setQuantity(1); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="modal-content">
          <div className="modal-image-section">
            <div className="modal-image-wrapper">
              <img src={product.image} alt={product.name} className="modal-image" />
              <div className="modal-badge">{product.brand}</div>
            </div>
          </div>

          <div className="modal-info-section">
            <span className="modal-category">{product.category}</span>
            <h2 className="modal-product-name">{product.name}</h2>
            
            <div className="modal-price-section">
              <span className="modal-price">₹{product.price}</span>
              <span className="modal-price-label">per item</span>
            </div>

            <div className="modal-description">
              <p>High quality {product.category.toLowerCase()} from {product.brand}. 
              Fresh and carefully selected for the best taste and quality.</p>
            </div>

            <div className="modal-quantity-section">
              <label className="quantity-label">Quantity</label>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                  </svg>
                </button>
                <span className="quantity-value">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(1)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="modal-total">
              <span className="total-label">Total Price</span>
              <span className="total-value">₹{product.price * quantity}</span>
            </div>

            <button className="modal-add-to-cart-btn" onClick={handleAddToCart}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"/>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"/>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"/>
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

