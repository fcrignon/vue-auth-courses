<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text rounded to="/">Messages</v-btn>
      <v-btn text rounded to="/NewMessage">New Messages</v-btn>
      <v-spacer></v-spacer>
      <v-btn text rounded v-if="!$store.state.token" to="/Register"
        >Register</v-btn
      >
      <v-btn text rounded v-if="!$store.state.token" to="/login">Login</v-btn>
      <v-btn
        text
        rounded
        v-if="$store.state.token"
        @click="$store.commit('logout')"
        >Logout</v-btn
      >
    </v-app-bar>

    <v-content>
      <br />
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {};
  }
});
</script>
