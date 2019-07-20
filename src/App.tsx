import React from "react";

import { ReactState } from "./components/react-state/react-state.component";
import { MobxStore } from './components/mobx-store/mobx-store.component';

const App = () => {
  return (
    <div className="App">
      <h1>MilkyWay</h1>
      <ReactState />
      <MobxStore />
    </div>
  );
}

export default App;
