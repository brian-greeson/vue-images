<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>

    <div class="right menu" v-if="isLoggedIn">
      <a class="item">Galleries</a>
      <a class="item">Upload</a>
      <a class="item" @click="logout">Logout</a>
    </div>

    <div class="right menu" v-else>
      <a class="item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  components: {},
  methods: mapActions(["login", "logout"]),
  computed: mapGetters(["isLoggedIn"]),
};
</script>