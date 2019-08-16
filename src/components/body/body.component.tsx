import React, { FC } from 'react';

import { Route } from "react-router-dom";

import { Home } from '../home/home.component';
import { ReactState } from "../react-state/react-state.component";
import { MobxStore } from '../mobx-store/mobx-store.component';
import { SampleApi } from '../sample-api/sample-api.component';

export const Body: FC = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/reactStore" exact component={ReactState} />
      <Route path="/mobxStore/" component={MobxStore} />
      <Route path="/sampleApi/" component={SampleApi} />
    </div>
  )
}

