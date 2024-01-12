import React, { useEffect } from 'react';


import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';
import Homepage_Grid_Intro from './grid_page/homepage/Homepage_Intro_Grid';
import Skills from './grid_page/homepage/Skills';
import SkillsScraping from './grid_page/homepage/skills_scraping';
import SkillsNlp from './grid_page/homepage/skills_nlp';
import Pastwork from './grid_page/homepage/pastwork';
import Contact from './grid_page/homepage/contact';
import Footer from './grid_page/homepage/footer';
import SpeedDial from './grid_page/homepage/SpeedDial';
import Education from './grid_page/Education/education_intro_grid';
import Degrees from './components/degrees';
import ExperienceIntro from './grid_page/Experience/Experience_intro_grid';
import Experience from './components/Experience_Internships';
import Contactme from './grid_page/Contactme/Contactme_grid';
import AboutMe from './grid_page/aboutme/Aboutme_grid'
import Blog from './components/blog/coming_soon';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/education"
            element={
              <>
                <ScrollToTop />
                <Education />
                <Degrees />
                <Footer />
                <SpeedDial />
              </>
            }
          />
          <Route
            path="/experience"
            element={
              <>
                <ScrollToTop />
                <ExperienceIntro />
                <Experience />
                <Footer />
                <SpeedDial />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ScrollToTop />
                <Contactme/>
                
                <Footer />
                <SpeedDial />
              </>
            }
          />
          <Route 
            path="/about"
            element={
              <>
                <ScrollToTop />
                <AboutMe />
                <Footer />
                <SpeedDial />
              </>
            
            }
          />
          <Route
            path='/blog'
            element={
              <>
                <ScrollToTop />
                <Blog />
                <Footer />
                <SpeedDial />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <ScrollToTop />
                <Homepage_Grid_Intro />
                <Skills />
                <SkillsScraping />
                <SkillsNlp />
                <Pastwork />
                <Contact />
                <Footer />
                <SpeedDial />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

