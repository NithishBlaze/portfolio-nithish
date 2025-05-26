import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/NavBar/Navbar';
import Home from './Components/Home/home';
import CustomCursor from './Components/Cursor/cursor';
import Resume from './Components/Resume/resume';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <CustomCursor />
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}


export default App;
