import React from 'react';
import Card from '../Card/Card';
import './GridContainer.css';

export default function GridContainer({ products = [], children }) {
  return (
    <div className="grid-container">
      {products.map(p => (
        <Card key={p.ID} product={p} />
      ))}
      {children}
    </div>
  );
}