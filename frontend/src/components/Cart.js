import React from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      <div className={`cart-panel ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"/>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"/>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"/>
              </svg>
              <h3>Your cart is empty</h3>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div
                key={item.id}
                className="cart-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <span className="cart-item-price">₹{item.price}</span>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14"/>
                      </svg>
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                    aria-label="Remove item"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="total-amount">₹{total}</span>
            </div>
            <button className="checkout-btn">
              <span>Proceed to Checkout</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

