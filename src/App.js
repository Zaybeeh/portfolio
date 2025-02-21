import React, { useEffect} from 'react';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner.js';
import {Skills} from './components/Skills.js';
import {Projects} from './components/Projects.js';
import {Contact} from './components/Contact.js';
import {Footer} from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
