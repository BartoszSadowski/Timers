<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-title>
      Add new timer
    </v-card-title>

    <form>
      <v-row class="pl-4">
        <v-col md="5">
          <TimePicker
            v-model="time"
          />
        </v-col>
        <v-col md="5">
          <DatePicker
            v-model="date"
          />
        </v-col>
        <v-col>
          <v-btn
                icon
                elevation="2"
                @click="addItem"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
        </v-col>
      </v-row>
    </form>

    <v-snackbar
      v-model="errorInfo.open"
      :timeout="errorInfo.timeout"
      top
    >
      {{ errorInfo.text }}
    </v-snackbar>

  </v-card>
</template>

<script>
import TimePicker from './TimePicker.vue';
import DatePicker from './DatePicker.vue';

export default {
  name: 'TimerAdder',

  components: {
    TimePicker,
    DatePicker,
  },

  data() {
    return {
      date: '',
      time: '',
      errorInfo: {
        open: false,
        text: 'Timer must point to the future',
        timeout: 1000,
      },
    };
  },

  methods: {
    addItem() {
      const datetimeString = `${this.date} ${this.time}`;
      const datetime = new Date(datetimeString);

      if (datetime - new Date() < 0) {
        this.errorInfo.open = true;
        return;
      }

      this.$store.dispatch('addTimer', datetime);
    },
  },
};
</script>
