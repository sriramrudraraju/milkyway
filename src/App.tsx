import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ReactState } from "./components/react-state/react-state.component";
import { MobxStore } from './components/mobx-store/mobx-store.component';
import { SampleApi } from './components/sample-api/sample-api.component';

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
