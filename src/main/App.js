import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../Style/global';
import Routes from '../routes';
import CustomThemeProvider from '../contexts/ThemeContext';

const App = () => {
  return(
    <CustomThemeProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </CustomThemeProvider>
    
  )
}

export default App;
