import React, { useEffect } from 'react';

import { useAppStore } from '../../stores';

export const SampleApi = () => {
  const appStore = useAppStore();

  useEffect(() => {
    appStore.sampleApiCall();
  });
  return <h1>api called</h1>;
};
