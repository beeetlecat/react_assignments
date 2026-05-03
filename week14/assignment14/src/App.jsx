import "./css/app.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Navbar from './components/Navbar.jsx'
import{HashRouter, Routes, Route} from "react-router-dom";

// import ProjectList from "./components/ProjectList.jsx";
// import Home from "./pages/Home.jsx";

function App() {
  return (
      <HashRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
          </Routes>
      </HashRouter>
  )
}

export default App;