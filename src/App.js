import './App.css';
import Header from './Components/header/Header';
import CallToAction from './Components/CallToAction/CallToAction';
import CarouselImage from './Components/ImgCarousel/Carousel';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      {/* <CarouselImage /> */}
      <CallToAction />
    </div>
  );
}

export default App;
