import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Sidebar from './components/Sidebar';

// DUMMY DATA
import { links } from './data/HeaderData';

//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Header links={links} toggle={handleOnClick} isOpen={isOpen} />
      <MainContainer />
      <Sidebar links={links} toggle={handleOnClick} isOpen={isOpen} />
    </Router>
  );
}

export default App;
