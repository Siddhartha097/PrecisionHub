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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/' element={<Page1></Page1>}>
        </Route>
        <Route path='About' element={<About/>}>
        </Route>
        <Route path='Contact' element={<Contact></Contact>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
