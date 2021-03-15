<template>
  <v-app>
    <AppBar />
    <Main />
  </v-app>
</template>

<script>
import Main from './components/views/Main.vue';
import AppBar from './components/common/AppBar.vue';

export default {
  name: 'App',
  components: {
    Main,
    AppBar,
  },
};
</script>
