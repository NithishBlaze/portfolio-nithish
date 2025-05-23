import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/NavBar/Navbar';
import Home from './Components/Home/home';
import CustomCursor from './Components/Cursor/cursor';
import Resume from './Components/Resume/resume';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/Contact';
// import Experience from './Components/Experience/experience';

function App() {
  return (
    <Router>
      <CustomCursor />
      
      {/* Header Section */}
      <header>
        <Header />
      </header>

      {/* Main Content Section */}
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}


export default App;
