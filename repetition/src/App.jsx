// pictures imports
import apple from "./assets/apple.jpeg"
import orange from "./assets/orange.jpg"
import grape from "./assets/grapes.jpg"
import kiwi from "./assets/kiwi.jpg"
import pineapple from "./assets/pineapple.jpg"
import mango from "./assets/mango.jpg"
import watermelon from "./assets/watermelon.jpg"
import strawberry from "./assets/strawberry.jpg"
// components imports

import { Header } from "./components/Header/Header"
import { Content } from "./components/Content/Content"
import { Footer } from "./components/Footer/Footer"
import mypic from "./assets/aaaa.jpg"
import banana from "./assets/ban.png"
import { ImageCard } from "./components/ImageCard/ImageCard"
import { Image } from "./components/Image/Image"
import "./components/CSS/Extra.css"
import Card from "./components/Card/Card"
import GridContainer from "./components/GridContainer/GridContainer"
import React, { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/product')
      .then(res => res.json())
      .then(setProducts)
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app">
      <GridContainer products={products} />
    </div>
  );
}