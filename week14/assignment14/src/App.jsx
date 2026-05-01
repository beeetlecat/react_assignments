import "./css/app.css";
import About from "./pages/About.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import NavBar from "./components/Navbar.jsx";

import ProjectList from "./components/ProjectList.jsx";
// import Home from "./pages/Home.jsx";

function App() {
  return (
    <div>
      <NavBar/>
      <About />
      <ProjectsPage/>
      {/* <ProjectList /> */}
    </div>
  )
}

export default App;