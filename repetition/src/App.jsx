import { Header } from "./components/Header/Header"
import { Content } from "./components/Content/Content"
import { Footer } from "./components/Footer/Footer"
import mypic  from "./assets/aaaa.jpg"
import { ImageCard } from "./components/ImageCard/ImageCard"
import { Image } from "./components/Image/Image"

function App() {
  return (
    <>
    <Header title='This is a Title'/>
    <Content
    pic={mypic}
    paragraph1='This is a paragraph'
    paragraph2='This is also a paragraph'
    paragraph3='and another one!!!'/>
    <Footer
    email='Email@email.com'
    telefon='42069420'
    address='storvej 6'/>
    <ImageCard title="Beautiful Image" description="This is a description of the beautiful image shown below">
      <Image picture={mypic}/>
    </ImageCard>
    </>
  )
}

export default App