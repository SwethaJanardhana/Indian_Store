import React, { useState, useEffect } from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ isOpen, onClose, onSearch, searchQuery, onCategorySelect }) => {
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);
  const [categories, setCategories] = useState([]);

  const menuItems = [
    { icon: '🏠', label: 'Home', action: null },
    { icon: '👤', label: 'My Account', action: null },
    { icon: '💼', label: 'Jobs', action: null },
    { icon: '🔐', label: 'Log in / Register', action: null },
    { icon: '📋', label: 'Orders', action: null },
    { icon: '🚚', label: 'Track Orders', action: null },
  ];

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([
        { id: 1, name: "Atta and Flour Items", slug: "atta-flour", icon: "🌾" },
        { id: 2, name: "Rice and Rice Products", slug: "rice", icon: "🍚" },
        { id: 3, name: "Dal Beans & Lentils", slug: "dal-lentils", icon: "🫘" },
        { id: 4, name: "Spices", slug: "spices", icon: "🌶️" },
        { id: 5, name: "Snack Items", slug: "snacks", icon: "🍿" },
        { id: 6, name: "Pickle Paste & Powder", slug: "pickle-paste", icon: "🥫" },
        { id: 7, name: "Frozen Items and Fresh Vegetables", slug: "frozen-fresh", icon: "🥬" }
      ]);
    }
  };

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onClose();
    }
  };

  const handleCategoryClick = (category) => {
    onClose();
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <>
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <form className="search-box" onSubmit={handleSearchSubmit}>
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>

        <nav className="menu-nav">
          {/* Home */}
          <a href="#" className="menu-item" onClick={onClose}>
            <span className="menu-icon">🏠</span>
            <span className="menu-label">Home</span>
          </a>

          {/* Categories Dropdown */}
          <div className="menu-categories">
            <button 
              className={`menu-item menu-item-dropdown ${isCategoriesExpanded ? 'expanded' : ''}`}
              onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
            >
              <span className="menu-icon">📦</span>
              <span className="menu-label">Categories</span>
              <svg className={`menu-dropdown-arrow ${isCategoriesExpanded ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            <div className={`menu-categories-list ${isCategoriesExpanded ? 'expanded' : ''}`}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="menu-category-item"
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className="category-item-icon">{category.icon}</span>
                  <span className="category-item-label">{category.name}</span>
                </button>
              ))}
              <button
                className="menu-category-item menu-category-all"
                onClick={() => handleCategoryClick(null)}
              >
                <span className="category-item-icon">🛒</span>
                <span className="category-item-label">View All Products</span>
              </button>
            </div>
          </div>

          {/* Other menu items */}
          {menuItems.slice(1).map((item, index) => (
            <a
              key={item.label}
              href="#"
              className="menu-item"
              style={{ animationDelay: `${(index + 2) * 0.05}s` }}
              onClick={onClose}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
              <svg className="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </a>
          ))}
        </nav>

        <div className="menu-footer">
          <p>© 2024 Indian Groceries</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
