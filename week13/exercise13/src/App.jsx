import './css/app.css';
import About from './pages/about';
import Home from './pages/home';
import Footer from './components/Footer';
import Navbar from './components/navbar'


function App() {
  return (
    <div>
      <Navbar/>
      <h1>Gothic Books and Short Stories</h1>
      <Home />
      <Footer/>
    </div>
  );
}

export default App

