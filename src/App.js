import './App.css';
import Header from './Components/header/Header';
import CallToAction from './Components/CallToAction/CallToAction';
import CarouselImage from './Components/ImgCarousel/Carousel';

function App() {
  return (
    <div className='App'>
      <Header />
      <CarouselImage />
      <CallToAction />
    </div>
  );
}

export default App;
