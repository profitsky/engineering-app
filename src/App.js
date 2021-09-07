import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import MainContainer from './components/MainContentContainer';
import Sidebar from './components/Sidebar';

// DUMMY DATA
import { links } from './data/HeaderData';

//STYLES
import { GlobalStyle } from './GlobalStyle';

//CONTEXT
import OverlayContext from './context/overlayConext';

function App() {
  console.log('ZAMONTOWANY APP');
  //STATES
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [darkOverlay, setDarkOverlay] = useState(false);

  //FUNCTIONS
  const handleOnClickMobileIcon = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  const handleDarkOverlay = (isDark) => {
    setDarkOverlay(isDark);
  };

  return (
    <Router>
      <OverlayContext.Provider
        value={{
          isOverlayDark: darkOverlay,
          onChange: handleDarkOverlay,
        }}
      >
        <GlobalStyle />
        <Header
          links={links}
          toggle={handleOnClickMobileIcon}
          isOpen={isOpenSideBar}
        />
        <MainContainer></MainContainer>
      </OverlayContext.Provider>
      <Sidebar
        links={links}
        toggle={handleOnClickMobileIcon}
        isOpen={isOpenSideBar}
      />
    </Router>
  );
}

export default App;
