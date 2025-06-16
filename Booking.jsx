import React from 'react';

const Booking = ({ selectedProduct }) => {
  if (!selectedProduct) return <p>Select a product to book</p>;

  return (
    <div>
      <h3>Booking for: {selectedProduct.name}</h3>
      <button onClick={() => alert("Booking confirmed!")}>Confirm Booking</button>
    </div>
  );
};

export default Booking;
