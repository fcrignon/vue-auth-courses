<template>
  <div>
    <v-flex sm8 offset-sm2>
      <v-card class="rounded-card">
        <v-toolbar color="primary">
          <v-toolbar-title>Messages</v-toolbar-title>
        </v-toolbar>

        <v-list>
          <v-list-item
            v-for="(message, index) in $store.state.messages"
            :key="index"
            :to="'message/' + index"
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="message.text"
                color="primary"
                class="title"
              ></v-list-item-title>
              <v-list-item-subtitle
                v-text="message.user"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch("getMessages");
  }
};
</script>
<style>
.title {
  color: #00e676;
}
</style>
