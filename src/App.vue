<template>
  <v-app>
    <AppBar />
    <Main />
    <AppFooter />
  </v-app>
</template>

<script>
import Main from './components/views/Main.vue';
import AppBar from './components/common/AppBar.vue';
import AppFooter from './components/common/AppFooter.vue';

export default {
  name: 'App',
  components: {
    Main,
    AppBar,
    AppFooter,
  },
};
</script>
