<template>
  <v-flex sm8 offset-sm2>
    <v-card rounded-20>
      <v-toolbar color="primary">
        <v-toolbar-title>New messages</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="messageBody"
                label="Message"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container pa-2>
          <v-btn rounded color="primary" @click="submit">Submit</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      messageBody: ""
    };
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch("newMessage", this.messageBody);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
