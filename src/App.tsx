import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';

import { ReactState } from "./components/react-state/react-state.component";
import { MobxStore } from './components/mobx-store/mobx-store.component';
import { SampleApi } from './components/sample-api/sample-api.component';

import { theme } from './common/themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">React State</Link>
              </li>
              <li>
                <Link to="/mobxStore/">Mobx Store</Link>
              </li>
              <li>
                <Link to="/sampleApi/">Sample Api</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={ReactState} />
          <Route path="/mobxStore/" component={MobxStore} />
          <Route path="/sampleApi/" component={SampleApi} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
