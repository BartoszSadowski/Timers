<template>
  <v-sheet class="pa-2 ma-2" elevation="1">
    Left
      {{ timeLeft.days }}
      : {{ timeLeft.hours }}
      : {{ timeLeft.minutes }}
      : {{ timeLeft.seconds }}
  </v-sheet>
</template>

<script>
import { msToTimeObj } from '../../../utils/time';

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
      return msToTimeObj(this.timer.date - this.now);
    },
  },

  created() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
};
</script>
