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
        <v-col md="10">
          <v-text-field
            v-model="datetime"
            label="New counter"
            prepend-icon="mdi-clock"
            readonly
            @click="openPicker"
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

    <TimePicker
      :open="pickerOpen"
      @close="closePicker"
    />
  </v-card>
</template>

<script>
import TimePicker from './TimePicker.vue';

export default {
  name: 'TimerAdder',

  components: {
    TimePicker,
  },

  data() {
    return {
      datetime: new Date(),
      pickerOpen: false,
    };
  },

  methods: {
    openPicker() {
      this.pickerOpen = true;
    },

    closePicker() {
      this.pickerOpen = false;
    },
  },
};
</script>
