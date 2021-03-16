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
        v-model="dateItem"
        label="Pick a date"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="dateItem"
      no-title
    />
  </v-menu>
</template>

<script>
export default {
  name: 'DatePicker',

  model: {
    prop: 'date',
    event: 'update',
  },

  props: {
    date: {
      type: String,
      require: true,
    },
  },

  computed: {
    dateItem: {
      get() {
        return this.date;
      },

      set(date) {
        this.$emit('update', date);
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
