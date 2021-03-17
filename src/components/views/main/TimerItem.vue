<template>
  <v-sheet class="pa-2 ma-2" elevation="1">
      <v-row>
        <v-col>
          <TimePresenter
            :number="timeLeft.days"
            :title="$t('TIMER_ITEM.DAYS')"
          />
        </v-col>
        <v-col>
          <TimePresenter
            :number="timeLeft.hours"
            :title="$t('TIMER_ITEM.HOURS')"
          />
        </v-col>
        <v-col>
          <TimePresenter
            :number="timeLeft.minutes"
            :title="$t('TIMER_ITEM.MINUTES')"
          />
        </v-col>
        <v-col>
          <TimePresenter
            :number="timeLeft.seconds"
            :title="$t('TIMER_ITEM.SECONDS')"
          />
        </v-col>
        <v-col>
          <v-container fill-height fluid>
            <v-row align="center"
              justify="center"
            >
              <v-btn
                icon
                elevation="2"
                @click="removeItem(timer)"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </v-row>
          </v-container>
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
    now: {
      type: Date,
      require: true,
    },
  },

  computed: {
    timeLeft() {
      const timeLeft = this.timer.date - this.now;

      if (timeLeft < 0) {
        this.removeItem(this.timer);
      }

      return msToTimeObj(timeLeft);
    },
  },

  methods: {
    removeItem({ id }) {
      this.$store.dispatch('removeTimer', id);
    },
  },
};
</script>
