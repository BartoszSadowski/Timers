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
                @click="removeItem(timer)"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
        </v-col>
      </v-row>
    </form>

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
      pickerOpen: false,
    };
  },
};
</script>
