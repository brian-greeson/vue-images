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
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }

};