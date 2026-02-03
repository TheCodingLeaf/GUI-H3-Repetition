import { Header } from "./components/Header/Header"
import { Content } from "./components/Content/Content"
import { Footer } from "./components/Footer/Footer"
import picture from "./assets/aaaa.jpg"

function App() {
  return (
    <>
    <Header title='This is a Title'/>
    <Content
    pic={picture}
    paragraph1='This is a paragraph'
    paragraph2='This is also a paragraph'
    paragraph3='and another one!!!'/>
    <Footer
    email='Email@email.com'
    telefon='42069420'
    address='storvej 6'/>
    </>
  )
}

export default App