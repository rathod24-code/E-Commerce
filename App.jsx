import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Booking from './components/Booking';
import OrderTracker from './components/OrderTracker';
import Chatbot from './components/Chatbot';
import FlightManager from './components/FlightManager';

const products = [
  { id: 1, name: "Laptop", description: "Coding laptop" },
  { id: 2, name: "Smartphone", description: "Flagship phone" },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = products.find(p => p.id === selectedId);

  return (
    <div>
      <h1>E-Commerce Dashboard</h1>
      <ProductList products={products} onBook={setSelectedId} />
      <Booking selectedProduct={selectedProduct} />
      <OrderTracker />
      <Chatbot />
      <FlightManager />
    </div>
  );
}

export default App;
