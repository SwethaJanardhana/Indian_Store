import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = ({ onMenuClick, onCartClick, onCategorySelect, cartCount, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);

  const navItems = [
    { icon: '🏠', label: 'Home', action: null },
    { icon: '👤', label: 'My Account', action: null },
    { icon: '💼', label: 'Jobs', action: null },
    { icon: '🔐', label: 'Login', action: null },
    { icon: '📋', label: 'Orders', action: null },
    { icon: '🚚', label: 'Track', action: null },
  ];

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const handleCategoryClick = (category) => {
    setIsDropdownOpen(false);
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="url(#logoGrad)"/>
              <path d="M12 28L20 12L28 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="22" r="3" fill="white"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#ff6b35"/>
                  <stop offset="100%" stopColor="#f7c948"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">Indian Groceries</span>
        </div>

        {/* Desktop/Landscape Navigation */}
        <nav className="desktop-nav">
          {navItems.slice(0, 1).map((item) => (
            <a key={item.label} href="#" className="nav-item">
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}

          {/* Categories Dropdown */}
          <div className="nav-dropdown" ref={dropdownRef}>
            <button 
              className={`nav-item nav-item-dropdown ${isDropdownOpen ? 'active' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="nav-icon">📦</span>
              <span className="nav-label">Categories</span>
              <svg className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <span>Browse Categories</span>
                </div>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="dropdown-item"
                    onClick={() => handleCategoryClick(category)}
                  >
                    <span className="dropdown-icon">{category.icon}</span>
                    <span className="dropdown-label">{category.name}</span>
                  </button>
                ))}
                <div className="dropdown-divider"></div>
                <button
                  className="dropdown-item dropdown-item-all"
                  onClick={() => handleCategoryClick(null)}
                >
                  <span className="dropdown-icon">🛒</span>
                  <span className="dropdown-label">View All Products</span>
                </button>
              </div>
            )}
          </div>

          {navItems.slice(1).map((item) => (
            <a key={item.label} href="#" className="nav-item">
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop Search */}
        <form className="desktop-search" onSubmit={handleSearchSubmit}>
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="header-actions">
          <button className="cart-btn" onClick={onCartClick} aria-label="Open cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          {/* Burger menu - only visible on portrait/mobile */}
          <button className="menu-btn" onClick={onMenuClick} aria-label="Open menu">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
