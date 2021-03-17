<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="timeItem"
        :label="$t('PICKERS.TIME_LABEL')"
        prepend-icon="mdi-clock"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
      v-model="timeItem"
      format="24hr"
      use-seconds
    />
  </v-menu>
</template>

<script>
export default {
  name: 'TimePicker',

  model: {
    prop: 'time',
    event: 'update',
  },

  props: {
    time: {
      type: String,
      require: true,
    },
  },

  computed: {
    timeItem: {
      get() {
        return this.time;
      },

      set(time) {
        this.$emit('update', time);
      },
    },
  },

  data() {
    return {
      menu: false,
    };
  },
};
</script>
