// any js module
import * as RootNavigation from '../navigation/RootNavigation';

// ...
export default function navigateToHome() {
  RootNavigation.navigate('Profile', { userName: 'Lucy' });
}

// import { CommonActions } from '@react-navigation/native';

// class NavigationService {
//   constructor() {
//     this._navigation = null;
//   }
//   init(navigation) {
//     console.log('NavigationService navigation = ', navigation);
//     if (this._navigation) {
//       return;
//     }

//     this._navigation = navigation;
//   }
//   navigate(route, params = 'PARAMS') {
//     console.log('route = ', route);
//     console.log('params = ', params);
//     this._navigation.dispatch(
//       CommonActions.navigate({
//         name: route,
//         params: params,
//       }),
//     );
//   }
//   navigateToHome() {
//     this.navigate('Home');
//   }
// }

// export default new NavigationService();
