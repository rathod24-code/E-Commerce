import React from 'react';

const FlightManager = () => {
  const flights = [
    { id: 'AI101', status: 'On Time', destination: 'Delhi' },
    { id: '6E202', status: 'Delayed', destination: 'Mumbai' },
  ];

  return (
    <div>
      <h2>Flight Management</h2>
      <ul>
        {flights.map(f => (
          <li key={f.id}>{f.id} to {f.destination} - {f.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlightManager;
