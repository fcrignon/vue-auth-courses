<template>
  <v-flex sm8 offset-sm2>
    <v-card rounded-20>
      <v-toolbar color="primary">
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="userName"
                label="User name"
                required
              ></v-text-field>
            </v-flex>
            <br />
            <v-flex xs12 md4>
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container pa-2>
          <v-btn rounded color="primary" @click="register">Register</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    async register() {
      this.$store.dispatch("register", {
        userName: this.userName,
        password: this.password
      });
    }
  }
};
</script>
