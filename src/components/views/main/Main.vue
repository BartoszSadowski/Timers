<template>
  <v-main class="mt-2">
    <TimerAdder class="ma-4" />
    <TimerList
      class="ma-4"
      :list="timers"
    />
  </v-main>
</template>

<script>
import TimerAdder from './TimerAdder.vue';
import TimerList from './TimerList.vue';

export default {
  name: 'Main',

  components: {
    TimerAdder,
    TimerList,
  },

  computed: {
    timers() {
      return this.$store.state.timers.list;
    },
  },
};
</script>
