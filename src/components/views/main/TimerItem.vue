<template>
  <v-sheet class="pa-2 ma-2" elevation="1">
    {{ timer.date }} : {{ timeLeft }}
  </v-sheet>
</template>

<script>
export default {
  name: 'TimerItem',

  props: {
    timer: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {
      now: new Date(),
    };
  },

  computed: {
    timeLeft() {
      return this.timer.date - this.now;
    },
  },

  created() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
};
</script>
