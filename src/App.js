import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Marketplace from './Pages/Marketplaces/Marketplaces';
import Blogs from './Pages/Blogs/Blogs';
import AboutUs from './Pages/AboutUs/AboutUs';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace/:category' element={<Marketplace />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

