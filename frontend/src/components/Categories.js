import React, { useState, useEffect } from 'react';
import './Categories.css';

const Categories = ({ isOpen, onClose, onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

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
      // Fallback categories if API fails
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
    onSelectCategory(category);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="categories-overlay" onClick={onClose}>
      <div className="categories-modal" onClick={(e) => e.stopPropagation()}>
        <div className="categories-header">
          <h2>Categories</h2>
          <p>Browse products by category</p>
          <button className="categories-close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
              <svg className="category-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          ))}
        </div>

        <button className="view-all-btn" onClick={() => { onSelectCategory(null); onClose(); }}>
          <span>View All Products</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Categories;

