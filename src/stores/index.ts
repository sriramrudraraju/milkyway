import React from 'react';

import { AppStore } from './app/app';

const appStoreContext = React.createContext<{ appStore: AppStore }>({ appStore: new AppStore() });

export const useAppStore = function () {
  const store = React.useContext(appStoreContext);
  if (!store) {
    throw new Error('appStoreContext doesnt exists');
  }
  return store.appStore;
}
