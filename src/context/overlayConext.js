import React from 'react';

const OverlayContext = React.createContext({
  isOverlayDark: false,
  onChange: () => {},
});

export default OverlayContext;
