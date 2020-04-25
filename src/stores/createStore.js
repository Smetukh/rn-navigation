import { createContext, useContext } from 'react';
// import makeInspectable from 'mobx-devtools-mst';
import makeInspectable from 'mobx-devtools-mst';
import { connectToDevTools } from 'mobx-devtools/lib/mobxDevtoolsBackend';
import { RootStore } from './RootStore';
import { createPersist } from './utils';

function serialize(v) {
  return {
    auth: {
      isLoggedIn: v.auth.isLoggedIn,
    },
    viewer: {
      user: v.viewer.user,
    },
  };
}

connectToDevTools({ host: 'localhost', port: 8098 });

export function createStore() {
  const root = RootStore.create();

  makeInspectable(root);
  const persistor = createPersist(root, serialize);

  persistor.rehydrate();
  return root;
}

const MSTContext = createContext(null);

