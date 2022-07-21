import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <AboutMe />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
