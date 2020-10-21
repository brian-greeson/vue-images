import qs from 'qs';

const CLIENT_ID = process.env.VUE_APP_IMGUR_CLIEND_ID
const ROOT_URL = 'https://api.imgur.com/oauth2/authorize'

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}?${qs.stringify(queryString)}`;
  }
};