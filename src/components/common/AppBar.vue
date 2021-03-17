<template>
  <div>
    <v-app-bar dense app>
      <v-switch
        v-model="$vuetify.theme.dark"
        :label="darkModeMessage"
        class="mt-5"
      />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',

  computed: {
    darkModeMessage() {
      return this.$vuetify.theme.dark ? 'Switch to light mode' : 'Switch to dark mode';
    },
  },
};
</script>
