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
import mypic  from "./assets/aaaa.jpg"
import banana from "./assets/ban.png"
import { ImageCard } from "./components/ImageCard/ImageCard"
import { Image } from "./components/Image/Image"
import "./components/CSS/Extra.css"
import { Card } from "./components/Card/Card"
import { GridContainer } from "./components/GridContainer/GridContainer"

function App() {
  return (
    <>
    <div className="Extra">
      <Header title='This is a Title'/>

      <Content pic={mypic} paragraph1='This is a paragraph' paragraph2='This is also a paragraph' paragraph3='and another one!!!'/>

      <Footer email='Email@email.com' telefon='42069420' address='storvej 6'/>
      
      <ImageCard title="Beautiful Image" description="This is a description of the beautiful image shown below">
        <Image picture={mypic}/>
      </ImageCard>

      <GridContainer>
        <Card title="Banana" image={banana} description="A tasty banana" pris="10 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
        <Card title="Apple" image={apple} description="A juicy apple" pris="12 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
        <Card title="Orange" image={orange} description="A juicy orange" pris="15 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
        <Card title="Grape" image={grape} description="A juicy grape" pris="20 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
        <Card title="Kiwi" image={kiwi} description="A juicy kiwi" pris="9 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
        <Card title="Pineapple" image={pineapple} description="A juicy pineapple" pris="10 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
        <Card title="Mango" image={mango} description="A juicy mango" pris="12 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
        <Card title="Watermelon" image={watermelon} description="A juicy watermelon" pris="14 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
        <Card title="Strawberry" image={strawberry} description="A juicy strawberry" pris="4 kr" knap={<button style={{color: "white"}}>Køb nu!</button>}/>
      </GridContainer>
    </div>
    </>
  )
}

export default App