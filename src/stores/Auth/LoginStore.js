import { types, flow } from 'mobx-state-tree';
import Api from 'src/api';

function asyncModel(thunk) {
  const model = types
    .model('AsyncModel', {
      isLoading: false,
      isError: false,
    })

    .actions((store) => ({
      // run(...args) {
      //   console.log('LoginStore RUN= ');
      //   const promise = thunk(...args)(store);
      //   return promise;
      // },
      // logout() {
      //   console.log('LoginStore logout= ');
        
        
      //   const promise = thunk()(store);
      //   return promise;
      // }
    }));

  // return model.create({})
  return types.optional(model, {});
}

export const LoginStore = types
  .model('LoginStore', {
    isLoading: false,
    isError: false,
    // loginFlow: asyncModel(loginFlow),
    // logoutFlow: asyncModel(logoutFlow),
  })
  .actions((store) => ({
    // run: flow(function* run({ password, email }) {
    //   try {
    //     store.isLoading = true;
    //     store.isError = false;
    //     const res = yield Api.Auth.login({ password, email });
    //     console.log('res dataLoginStore = ', res.data);
    //     store.isLoading = false;
    //   } catch (err) {
    //     store.isError = true;
    //     console.log(err);
    //   }
    // }),
    // logout: flow(function* logout() {
    //   console.log('LOGINSTORE LOGOUT = ');

    //   yield Api.Auth.logout();
    // }),
  }));

// function loginFlow({ password, email }) {
//   return async (flowStore) => {
//     try {
//       flowStore.isLoading = true;
//       flowStore.isError = false;
//       const res = await Api.Auth.login({ password, email });
//       console.log('res dataLoginStore loginFlow = ', res.data);
//       // self.isLoading = false;???
//     } catch (err) {
//       console.log('err = ', err);
//       flowStore.isError = true;
//     }
//   };
// }
