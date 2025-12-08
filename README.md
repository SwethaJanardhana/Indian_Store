# XYZ Store

A modern e-commerce store application built with React (frontend) and Node.js (backend).

## Features

- 🏪 Beautiful modern UI with dark theme
- 🍔 Burger menu with navigation (Home, Categories, My Account, Jobs, Login/Register, Orders, Track Orders)
- 🔍 Product search functionality
- 🛒 Shopping cart with add/remove items
- 📦 Product listing sorted alphabetically
- 🏷️ Featured brands section (Maggi, Haldiram's, TRS)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Start the Backend Server

```bash
cd backend
npm start
```

The backend will run on http://localhost:5000

### 4. Start the Frontend (in a new terminal)

```bash
cd frontend
npm start
```

The frontend will run on http://localhost:3000

## Project Structure

```
xyz-store/
├── backend/
│   ├── package.json
│   └── server.js          # Express API server
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js/.css
│   │   │   ├── BurgerMenu.js/.css
│   │   │   ├── HeroSection.js/.css
│   │   │   ├── BrandsSection.js/.css
│   │   │   ├── ProductList.js/.css
│   │   │   └── Cart.js/.css
│   │   ├── App.js/.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## API Endpoints

- `GET /api/products` - Get all products (sorted alphabetically)
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/brand/:brand` - Get products by brand
- `GET /api/search?q=query` - Search products
- `GET /api/brands` - Get featured brands

## Technologies Used

- **Frontend**: React 18, CSS3 with custom properties
- **Backend**: Node.js, Express
- **Fonts**: Outfit, Playfair Display (Google Fonts)

