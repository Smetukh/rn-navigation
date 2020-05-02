import axios from 'axios';

// axios.defaults.baseURL =
//   'https://apiko-intensive-backend.herokuapp.com/';

export const Auth = {
  _token: null,

  setToken(token) {
    this._token = token;
    window.localStorage.setItem('___token', token);
  },
  isLoggedIn() {
    return !!this._token;
  },
  login({ email, password }) {
    return axios.post('/api/auth/login', {
      email,
      password,
    });
  },
  register({ email, password, fullName }) {
    console.log(
      'REGISTER email, password, fullName = ',
      email,
      password,
      fullName,
    );

    return axios.post('/api/auth/login', {
      email,
      password,
      fullName,
    });
  },
  logout() {
    window.localStorage.setItem('___token', null);
  },
};

export const Account = {
  getUser(USER_TOKEN) {
    console.log('USER_TOKEN = ', USER_TOKEN);

    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    return axios.get('/account', {
      headers: { Authorization: AuthStr },
    });
  },
};
