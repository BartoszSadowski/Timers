<template>
  <v-sheet class="pa-2 ma-2" elevation="1">
      <v-row>
        <v-col lg="3">
          <TimePresenter
            :number="timeLeft.days"
            title="Days"
          />
        </v-col>
        <v-col lg="3">
          <TimePresenter
            :number="timeLeft.hours"
            title="Hours"
          />
        </v-col>
        <v-col lg="3">
          <TimePresenter
            :number="timeLeft.minutes"
            title="Minutes"
          />
        </v-col>
        <v-col lg="3">
          <TimePresenter
            :number="timeLeft.seconds"
            title="Seconds"
          />
        </v-col>
      </v-row>
  </v-sheet>
</template>

<script>
import { msToTimeObj } from '../../../utils/time';

import TimePresenter from './TimePresenter.vue';

export default {
  name: 'TimerItem',

  components: {
    TimePresenter,
  },

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
