import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/scss/style.scss';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { AdditionalServices } from './component/Page/AdditionalServices';
import { Main } from './component/Page/Main';
import { ServicesPage } from './component/Page/ServicesPage';
import { GalleryPage } from './component/Page/GalleryPage';
import { HandmadeProducts } from './component/Page/HandmadeProducts';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/AdditionalServices' element={<AdditionalServices />} />
          <Route path='/Gallery' element={<GalleryPage />} />
          <Route path='/Services' element={<ServicesPage />} />
          <Route path='/HandmadeProducts' element={<HandmadeProducts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
