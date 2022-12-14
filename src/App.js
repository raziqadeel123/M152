import './App.css';
import 'react-multi-carousel/lib/styles.css';
import Header from './Components/header/Header';
import CallToAction from './Components/CallToAction/CallToAction';
import CarouselImage from './Components/ImgCarousel/Carousel';
import Hero from './Components/Hero/Hero';
import ProductSldier from './Components/ProductSlider/ProductSldier';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <ProductSldier />
      {/* <CarouselImage /> */}
      <CallToAction />
    </div>
  );
}

export default App;
