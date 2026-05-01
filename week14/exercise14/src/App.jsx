import './css/app.css';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/navbar'
import{HashRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App

