import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '../components/header/header.component';
import { Nav } from '../components/nav/nav.component';
import { Body } from '../components/body/body.component';

import { theme } from '../common/themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <React.Fragment>
          <Header />
          <Nav />
          <Body />
        </React.Fragment>
      </Router>
    </ThemeProvider>
  );
};

export default App;
