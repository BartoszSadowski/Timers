<template>
  <v-main class="mt-6">
    <TimerAdder />
  </v-main>
</template>

<script>
import TimerAdder from './TimerAdder.vue';

export default {
  name: 'Main',

  components: {
    TimerAdder,
  },
};
</script>
