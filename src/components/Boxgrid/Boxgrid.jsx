import React from 'react';
import './Boxgrid.css'; // Import CSS file for styling

const Boxgrid = () => {
  return (
    <div className='Container'>
    <div className="grid-container">
      {Array.from({ length: 100 }, (_, index) => (
        <div key={index} className="grid-item">{index + 1}</div>
      ))}
    </div>
    </div>
  );
};

export default Boxgrid;
