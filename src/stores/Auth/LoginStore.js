import { types, getRoot } from 'mobx-state-tree';
import Api from 'src/api';
import { asyncModel } from '../utils';
// import { LoginStore } from './LoginStore';

export const AuthStore = types.model('AuthStore', {
  // login: types.optional(LoginStore, {}),
  login: asyncModel(loginFlow),
  logout: asyncModel(logoutFlow),
});

function loginFlow({ password, email }) {
  return async (flowStore) => {
    const res = await Api.Auth.login({ password, email });

    Api.Auth.setToken(res.data.token);

    console.log('res.data loginFlow = ', res.data.user);
    getRoot(flowStore).viewer.setViewer(res.data.user);
  };
}
function logoutFlow() {
  return async (flowStore) => {
    await Api.Auth.setToken(null);
    getRoot(flowStore).viewer.setViewer();
  };
}
