import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Header from './Components/header/Header';
import CallToAction from './Components/CallToAction/CallToAction';
import CarouselImage from './Components/ImgCarousel/Carousel';
import Hero from './Components/Hero/Hero';
import ProductSldier from './Components/ProductSlider/ProductSldier';
import AccordionSection from './Components/Accordion/Accordion';
import Newsletter from './Components/NewsLetter/Newsletter';
import Footer from './Components/Footer/Footer';
import Team from './Components/Teams/Team';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <ProductSldier />
      <Newsletter />
      <Team />
      {/* <CarouselImage /> */}
      {/* <CallToAction /> */}
      <AccordionSection />
      <Footer />
      <BrowserRouter>
        <BrowserRouter>
          <Switch>
            <Route path='/'></Route>
            <Route path='/'></Route>
            <Route path='/'></Route>
          </Switch>
        </BrowserRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
