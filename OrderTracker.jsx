import React, { useState, useEffect } from 'react';

const OrderTracker = () => {
  const [status, setStatus] = useState('Processing');

  useEffect(() => {
    const timer = setTimeout(() => setStatus('Shipped'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Order Tracker</h2>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderTracker;
