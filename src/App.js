
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Education from './pages/Educations/Education';
import Project from './pages/Projects/Project';
import Techstack from './pages/Techstack/Techstack';
import WorkExp from './pages/WorkExp/WorkExp';

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Project />
        <WorkExp />
      </div>
    </>
  );
}

export default App;
