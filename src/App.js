import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/heroBanner.js';
import AboutMe from './components/aboutMe.js';
import WhatIDo from './components/whatido.js';
import Skills from './components/skills.js';
import Accomplishments from './components/accomplishments.js'

function App() {
  return (
    <div className="App">
      <HeroBanner/>
      <AboutMe/>
      <WhatIDo/>
      <Skills/>
      <Accomplishments/>
    </div>
  );
}

export default App;
