import { types } from 'mobx-state-tree';
import Api from 'src/api';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './ViewerStore';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
  })
  .actions((store) => ({
    async bootstrap() {
      try {
        const token = await window.localStorage.getItem('___token');
        console.log('token ROOTSTORE = ', token);
        // TODO: check for undefined
        if (token === 'null') return;
        await Api.Auth.setToken(token);
        const res = await Api.Account.getUser(token);
        console.log('res Account.getUser() = ', res.data);

        store.viewer.setViewer(res.data);
      } catch (err) {
        // TODO: No such user. Show message/Redirect
        console.log('RootStore err = ', err);
      }
    },
  }));
