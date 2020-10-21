import api from '../../api/imgur';
const state = {
  token: null
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
    commit('setToken', null)
  },
  login: () => {
    api.login();
  },
  finalizeLogin: () => {

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
