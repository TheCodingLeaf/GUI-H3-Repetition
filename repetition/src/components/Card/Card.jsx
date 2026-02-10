import React from 'react';
import './Card.css';

export default function Card({ product }) {
  if (!product) return null;
  const { Title, Price, Description, Image_URL } = product;
  return (
    <div className="card">
      {Image_URL && <img src={Image_URL} alt={Title} height={50} width={50}/>}
      <h3>{Title}</h3>
      {Price && <p className="price">{Price}</p>}
      {Description && <p>{Description}</p>}
    </div>
  );
}