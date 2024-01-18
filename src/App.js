import logo from './logo.svg';
import './App.css';
import Page1 from './Home/Page1';
import Open1 from './OpeningScene/open1';
import { ReactDOM } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import Our from './About/Our';
import BuildFuture from './About/BuildFuture/BuildFuture';
import Reliability from './About/Reliability/Reliability';
import Expertise from './About/Expertise/Expertise';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='buildFuture' element={<BuildFuture />} />
        <Route path='expertise' element={<Expertise />} />
        <Route path='reliability' element={<Reliability />} />
        <Route path="/Our" element={<Our />} />
        <Route path='/Portfolio' element={<Portfolio></Portfolio>} />
        <Route path='/' element={<Page1 />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
