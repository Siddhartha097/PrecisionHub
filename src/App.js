
import './App.css';
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
import Home from './Home/Home';


const App = () => {
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
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
