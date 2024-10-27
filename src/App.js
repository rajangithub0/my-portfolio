
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Educations/Education';
import Project from './pages/Projects/Project';
import Techstack from './pages/Techstack/Techstack';
import WorkExp from './pages/WorkExp/WorkExp';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import Tada from 'react-reveal/Tada'

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Project />
          <WorkExp />
          <Contact />
        </div>
        <Tada>
          <div className='footer pb-3 ms-5'>
            <h4 className='text-center'> made with ❤️ @Rajan &copy; 2024</h4>
          </div>
        </Tada>
      </div>
      <ScrollToTop smooth color='#f29f67' style={{ backgroundColor: '#1e1e2c', borderRadius: "50%" }} />
    </>
  );
}

export default App;
