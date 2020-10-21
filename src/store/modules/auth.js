import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: (state) => {
    if (state.token == null) {
      return false;
    } else {
      return true;
    }
  },
  // equivalent to  state => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
    window.location = '/';
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const params = qs.parse(hash.replace('#', ''));
    commit('setToken', params.access_token);
    window.localStorage.setItem('imgur_token', params.access_token);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};

// https://api.imgur.com/oauth2/authorize?client_id={{ IMGUR_CLIENT_ID }}&response_type=token&state=APPLICATION_STATE
