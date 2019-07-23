import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ReactState } from "./components/react-state/react-state.component";
import { MobxStore } from './components/mobx-store/mobx-store.component';

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
            </ul>
          </nav>

          <Route path="/" exact component={ReactState} />
          <Route path="/mobxStore/" component={MobxStore} />
        </div>
      </Router>
    </div>
  );
}

export default App;
