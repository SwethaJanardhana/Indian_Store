import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BurgerMenu from './components/BurgerMenu';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/category/${category.slug}`);
      const data = await response.json();
      setProducts(data);
      setSelectedCategory(category);
      setShowProducts(true);
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error fetching category products:', error);
    }
  };

  const handleCategorySelect = (category) => {
    if (category) {
      fetchProductsByCategory(category);
    } else {
      // View all products
      fetchProducts();
      setSelectedCategory(null);
      setShowProducts(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      try {
        const response = await fetch(`http://localhost:5000/api/search?q=${query}`);
        const data = await response.json();
        setProducts(data);
        setSelectedCategory(null);
        setShowProducts(true);
      } catch (error) {
        console.error('Error searching:', error);
      }
    } else {
      fetchProducts();
    }
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header
        onMenuClick={() => setIsMenuOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        onCategorySelect={handleCategorySelect}
        cartCount={cartCount}
        onSearch={handleSearch}
      />
      
      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onCategorySelect={handleCategorySelect}
      />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <ProductDetail
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <main className="main-content">
        {!showProducts ? (
          <>
            <HeroSection onShopNow={() => setShowProducts(true)} />
            <BrandsSection />
          </>
        ) : (
          <ProductList
            products={products}
            onAddToCart={addToCart}
            onProductClick={setSelectedProduct}
            categoryName={selectedCategory?.name}
            onBack={() => {
              setShowProducts(false);
              setSearchQuery('');
              setSelectedCategory(null);
              fetchProducts();
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
