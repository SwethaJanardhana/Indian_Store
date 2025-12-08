const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Categories
const categories = [
  { id: 1, name: "Atta and Flour Items", slug: "atta-flour", icon: "🌾" },
  { id: 2, name: "Rice and Rice Products", slug: "rice", icon: "🍚" },
  { id: 3, name: "Dal Beans & Lentils", slug: "dal-lentils", icon: "🫘" },
  { id: 4, name: "Spices", slug: "spices", icon: "🌶️" },
  { id: 5, name: "Snack Items", slug: "snacks", icon: "🍿" },
  { id: 6, name: "Pickle Paste & Powder", slug: "pickle-paste", icon: "🥫" },
  { id: 7, name: "Frozen Items and Fresh Vegetables", slug: "frozen-fresh", icon: "🥬" }
];

// Sample product data with new categories
const products = [
  // Atta and Flour Items
  {
    id: 1,
    name: "Aashirvaad Whole Wheat Atta",
    brand: "Aashirvaad",
    price: 245,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop",
    category: "Atta and Flour Items"
  },
  {
    id: 2,
    name: "Pillsbury Chakki Fresh Atta",
    brand: "Pillsbury",
    price: 220,
    image: "https://images.unsplash.com/photo-1586444248879-bc604cbd555a?w=300&h=300&fit=crop",
    category: "Atta and Flour Items"
  },
  {
    id: 3,
    name: "Rajdhani Besan (Gram Flour)",
    brand: "Rajdhani",
    price: 85,
    image: "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?w=300&h=300&fit=crop",
    category: "Atta and Flour Items"
  },
  {
    id: 4,
    name: "TRS Corn Flour",
    brand: "TRS",
    price: 55,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop",
    category: "Atta and Flour Items"
  },
  {
    id: 5,
    name: "Nature Fresh Samolina (Suji)",
    brand: "Nature Fresh",
    price: 65,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
    category: "Atta and Flour Items"
  },
  
  // Rice and Rice Products
  {
    id: 6,
    name: "India Gate Basmati Rice",
    brand: "India Gate",
    price: 320,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
    category: "Rice and Rice Products"
  },
  {
    id: 7,
    name: "Daawat Traditional Basmati",
    brand: "Daawat",
    price: 285,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=300&h=300&fit=crop",
    category: "Rice and Rice Products"
  },
  {
    id: 8,
    name: "TRS Sona Masoori Rice",
    brand: "TRS",
    price: 180,
    image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=300&h=300&fit=crop",
    category: "Rice and Rice Products"
  },
  {
    id: 9,
    name: "MTR Rice Idli Rava",
    brand: "MTR",
    price: 95,
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=300&fit=crop",
    category: "Rice and Rice Products"
  },
  {
    id: 10,
    name: "Kohinoor Brown Rice",
    brand: "Kohinoor",
    price: 210,
    image: "https://images.unsplash.com/photo-1551881192-002e02873682?w=300&h=300&fit=crop",
    category: "Rice and Rice Products"
  },
  
  // Dal Beans & Lentils
  {
    id: 11,
    name: "TRS Chana Dal",
    brand: "TRS",
    price: 125,
    image: "https://images.unsplash.com/photo-1585996746158-7b47ca036972?w=300&h=300&fit=crop",
    category: "Dal Beans & Lentils"
  },
  {
    id: 12,
    name: "TRS Toor Dal (Arhar)",
    brand: "TRS",
    price: 145,
    image: "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?w=300&h=300&fit=crop",
    category: "Dal Beans & Lentils"
  },
  {
    id: 13,
    name: "Rajma (Kidney Beans)",
    brand: "TRS",
    price: 110,
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=300&h=300&fit=crop",
    category: "Dal Beans & Lentils"
  },
  {
    id: 14,
    name: "Moong Dal Yellow",
    brand: "Haldiram's",
    price: 135,
    image: "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?w=300&h=300&fit=crop",
    category: "Dal Beans & Lentils"
  },
  {
    id: 15,
    name: "Urad Dal Black",
    brand: "TRS",
    price: 140,
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300&h=300&fit=crop",
    category: "Dal Beans & Lentils"
  },
  {
    id: 16,
    name: "Masoor Dal Red Lentils",
    brand: "TRS",
    price: 95,
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=300&h=300&fit=crop",
    category: "Dal Beans & Lentils"
  },
  
  // Spices
  {
    id: 17,
    name: "TRS Turmeric Powder",
    brand: "TRS",
    price: 45,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&h=300&fit=crop",
    category: "Spices"
  },
  {
    id: 18,
    name: "MDH Garam Masala",
    brand: "MDH",
    price: 85,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop",
    category: "Spices"
  },
  {
    id: 19,
    name: "Everest Red Chilli Powder",
    brand: "Everest",
    price: 65,
    image: "https://images.unsplash.com/photo-1599909533051-3d55ee02c2e5?w=300&h=300&fit=crop",
    category: "Spices"
  },
  {
    id: 20,
    name: "TRS Coriander Powder",
    brand: "TRS",
    price: 55,
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=300&h=300&fit=crop",
    category: "Spices"
  },
  {
    id: 21,
    name: "Catch Cumin Seeds (Jeera)",
    brand: "Catch",
    price: 75,
    image: "https://images.unsplash.com/photo-1599909631178-c319826bec55?w=300&h=300&fit=crop",
    category: "Spices"
  },
  {
    id: 22,
    name: "MDH Chaat Masala",
    brand: "MDH",
    price: 55,
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300&h=300&fit=crop",
    category: "Spices"
  },
  
  // Snack Items
  {
    id: 23,
    name: "Haldiram's Aloo Bhujia",
    brand: "Haldiram's",
    price: 85,
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&h=300&fit=crop",
    category: "Snack Items"
  },
  {
    id: 24,
    name: "Haldiram's Namkeen Mix",
    brand: "Haldiram's",
    price: 120,
    image: "https://images.unsplash.com/photo-1553531889-65d9c41c2a9e?w=300&h=300&fit=crop",
    category: "Snack Items"
  },
  {
    id: 25,
    name: "Maggi 2-Minute Noodles",
    brand: "Maggi",
    price: 14,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=300&fit=crop",
    category: "Snack Items"
  },
  {
    id: 26,
    name: "Bikaji Bhujia Sev",
    brand: "Bikaji",
    price: 95,
    image: "https://images.unsplash.com/photo-1606471191009-63994b408e12?w=300&h=300&fit=crop",
    category: "Snack Items"
  },
  {
    id: 27,
    name: "Haldiram's Moong Dal",
    brand: "Haldiram's",
    price: 75,
    image: "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?w=300&h=300&fit=crop",
    category: "Snack Items"
  },
  {
    id: 28,
    name: "Parle-G Biscuits",
    brand: "Parle",
    price: 25,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop",
    category: "Snack Items"
  },
  
  // Pickle Paste & Powder
  {
    id: 29,
    name: "Mother's Recipe Mango Pickle",
    brand: "Mother's Recipe",
    price: 125,
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=300&h=300&fit=crop",
    category: "Pickle Paste & Powder"
  },
  {
    id: 30,
    name: "Priya Mixed Vegetable Pickle",
    brand: "Priya",
    price: 95,
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=300&h=300&fit=crop",
    category: "Pickle Paste & Powder"
  },
  {
    id: 31,
    name: "Pataks Tikka Masala Paste",
    brand: "Pataks",
    price: 145,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop",
    category: "Pickle Paste & Powder"
  },
  {
    id: 32,
    name: "Shan Biryani Masala",
    brand: "Shan",
    price: 85,
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=300&h=300&fit=crop",
    category: "Pickle Paste & Powder"
  },
  {
    id: 33,
    name: "MTR Sambar Powder",
    brand: "MTR",
    price: 75,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop",
    category: "Pickle Paste & Powder"
  },
  {
    id: 34,
    name: "Aachi Rasam Powder",
    brand: "Aachi",
    price: 55,
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300&h=300&fit=crop",
    category: "Pickle Paste & Powder"
  },
  
  // Frozen Items and Fresh Vegetables
  {
    id: 35,
    name: "Frozen Green Peas",
    brand: "Safal",
    price: 85,
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=300&h=300&fit=crop",
    category: "Frozen Items and Fresh Vegetables"
  },
  {
    id: 36,
    name: "Frozen Mixed Vegetables",
    brand: "Safal",
    price: 110,
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=300&h=300&fit=crop",
    category: "Frozen Items and Fresh Vegetables"
  },
  {
    id: 37,
    name: "Frozen Paneer Cubes",
    brand: "Amul",
    price: 195,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop",
    category: "Frozen Items and Fresh Vegetables"
  },
  {
    id: 38,
    name: "Frozen Samosas (12 pcs)",
    brand: "Haldiram's",
    price: 185,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop",
    category: "Frozen Items and Fresh Vegetables"
  },
  {
    id: 39,
    name: "Fresh Coriander Leaves",
    brand: "Farm Fresh",
    price: 25,
    image: "https://images.unsplash.com/photo-1592165786704-f6f5f8d85fec?w=300&h=300&fit=crop",
    category: "Frozen Items and Fresh Vegetables"
  },
  {
    id: 40,
    name: "Fresh Curry Leaves",
    brand: "Farm Fresh",
    price: 20,
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=300&h=300&fit=crop",
    category: "Frozen Items and Fresh Vegetables"
  },
  {
    id: 41,
    name: "Frozen Paratha (5 pcs)",
    brand: "Haldiram's",
    price: 145,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop",
    category: "Frozen Items and Fresh Vegetables"
  }
];

// Get all categories
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// Get all products (sorted alphabetically)
app.get('/api/products', (req, res) => {
  const sortedProducts = [...products].sort((a, b) => 
    a.name.localeCompare(b.name)
  );
  res.json(sortedProducts);
});

// Get products by category
app.get('/api/products/category/:category', (req, res) => {
  const { category } = req.params;
  const categoryData = categories.find(c => c.slug === category);
  
  if (categoryData) {
    const categoryProducts = products.filter(
      p => p.category === categoryData.name
    ).sort((a, b) => a.name.localeCompare(b.name));
    res.json(categoryProducts);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});

// Get products by brand
app.get('/api/products/brand/:brand', (req, res) => {
  const { brand } = req.params;
  const brandProducts = products.filter(
    p => p.brand.toLowerCase() === brand.toLowerCase()
  ).sort((a, b) => a.name.localeCompare(b.name));
  res.json(brandProducts);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Search products
app.get('/api/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.json([]);
  }
  const results = products.filter(p => 
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.brand.toLowerCase().includes(q.toLowerCase()) ||
    p.category.toLowerCase().includes(q.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));
  res.json(results);
});

// Get featured brands
app.get('/api/brands', (req, res) => {
  const brands = [
    {
      name: "Maggi",
      logo: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=200&h=100&fit=crop",
      tagline: "2-Minute Happiness"
    },
    {
      name: "Haldiram's",
      logo: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&h=100&fit=crop",
      tagline: "Taste of India"
    },
    {
      name: "TRS",
      logo: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=100&fit=crop",
      tagline: "Quality Spices & More"
    }
  ];
  res.json(brands);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
